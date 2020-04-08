import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntersectionObserverDirective } from './intersection-observer.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, IntersectionObserverDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
