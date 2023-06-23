import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstHandmadeCarouselComponent } from './first-handmade-carousel.component';
import { ControlModule } from 'src/app/shared/components/controls/handmade-carousel/control/control.module';

@NgModule({
    declarations: [FirstHandmadeCarouselComponent],
    imports: [CommonModule, ControlModule],
    exports: [FirstHandmadeCarouselComponent]
})
export class FirstHandmadeCarouselModule { }
