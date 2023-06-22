import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandmadeCarouselModule } from './core/components/carroussels/handmade-carousel/handmade-carousel.module';
import { ControlModule } from './shared/components/controls/handmade-carousel/control/control.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HandmadeCarouselModule,
    ControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
