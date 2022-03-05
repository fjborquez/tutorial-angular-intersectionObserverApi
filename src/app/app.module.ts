import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntersectionObserverDirective } from './directives/intersection-observer/intersection-observer.directive';
import { LoadingBubblesComponent } from './directives/loading-bubbles/loading-bubbles.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, IntersectionObserverDirective, LoadingBubblesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
