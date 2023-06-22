import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandmadeCarouselComponent } from './core/components/carroussels/handmade-carousel/handmade-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HandmadeCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
