import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstHandmadeCarouselModule } from './core/components/carroussels/first-handmade-carousel/handmade-carousel.module';
import { SecondHandmadeCarouselModule } from './core/components/carroussels/second-handmade-carousel/second-handmade-carousel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FirstHandmadeCarouselModule,
    SecondHandmadeCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
