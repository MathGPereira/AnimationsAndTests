import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandmadeCarouselComponent } from './handmade-carousel.component';
import { ControlModule } from 'src/app/shared/components/controls/handmade-carousel/control/control.module';

@NgModule({
    declarations: [HandmadeCarouselComponent],
    imports: [CommonModule, ControlModule],
    exports: [HandmadeCarouselComponent]
})
export class HandmadeCarouselModule { }
