import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ControlComponent } from './control.component';

@NgModule({
    declarations: [ControlComponent],
    imports: [CommonModule, FontAwesomeModule],
    exports: [ControlComponent]
})
export class ControlModule { }
