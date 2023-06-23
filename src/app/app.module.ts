import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandmadeCarouselModule } from './core/components/carroussels/first-handmade-carousel/handmade-carousel.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HandmadeCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
