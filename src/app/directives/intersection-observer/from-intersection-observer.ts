import { Observable, Subject } from "rxjs";
import { debounceTime, filter, mergeMap, tap } from "rxjs/operators";

export enum IntersectionStatus {
  Visible = 'Visible',
  Pending = 'Pending',
  NotVisible = 'NotVisible'
}

// Creacion del observable con tres parametros
export const fromIntersectionObserver = (
  element: HTMLElement, // El elemento a ser observado
  config: IntersectionObserverInit,
  debounce = 0 // Tiempo de debounce en ms
) =>
  new Observable<IntersectionStatus>(subscriber => {
    // Subject para ir agregando las notificaciones
    const subject$ = new Subject<{
      entry: IntersectionObserverEntry;
      observer: IntersectionObserver;
    }>();

    // Crea el observer y comienza a revisar los elementos de la lista entries
    const intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          // Si el elemento se va haciendo visible, entonces lo agrega
          if (isIntersecting(entry)) {
            subject$.next({ entry, observer });
          }
        });
      },
      config
    );

    subject$.subscribe(() => {
      // Envia a los subscriptores que el elemento está en estado Pending
      subscriber.next(IntersectionStatus.Pending);
    });

    subject$
      .pipe(
        debounceTime(debounce),
        filter(Boolean)
      )
      .subscribe(async ({ entry, observer }) => {
        const isEntryVisible = await isVisible(entry.target as HTMLElement);
        // Comprueba si el elemento es visible luego del tiempo de debounce
        // Actualiza el estado y envia las notificaciones
        if (isEntryVisible) {
          // Envia a los subscriptores que el elemento está en estado Visible
          subscriber.next(IntersectionStatus.Visible);
          observer.unobserve(entry.target);
        } else {
          // Envia a los subscriptores que el elemento está en estado NotVisible
          subscriber.next(IntersectionStatus.NotVisible);
        }
      });

    // Comienza la observacion de la visibilidad del elemento
    intersectionObserver.observe(element);

    return {
      // Función que realiza una finalización cuando el consumidor unsuscribe
      unsubscribe() {
        intersectionObserver.disconnect();
        subject$.unsubscribe();
      }
    };
  });

// Define si el elemento ya es visible, retornando un Promise con la visibilidad actual
async function isVisible(element: HTMLElement) {
  return new Promise(resolve => {
    const observer = new IntersectionObserver(([entry]) => {
      resolve(entry.isIntersecting);
      observer.disconnect();
    });

    observer.observe(element);
  });
}

// Define si el elemento va haciendose visible
function isIntersecting(entry: IntersectionObserverEntry) {
  return entry.isIntersecting || entry.intersectionRatio > 0;
}
