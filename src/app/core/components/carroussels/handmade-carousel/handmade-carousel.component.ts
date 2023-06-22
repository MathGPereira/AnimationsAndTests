import { Component } from '@angular/core';

@Component({
  selector: 'app-handmade-carousel',
  templateUrl: './handmade-carousel.component.html',
  styleUrls: ['./handmade-carousel.component.scss']
})
export class HandmadeCarouselComponent {

    private _activeImageIndex = 1;
    public indexes = [1, 2, 3, 4];

    get activeImageIndex(): number {
        return this._activeImageIndex;
    }

    set activeImageIndex(index: number) {
        this._activeImageIndex = index;
    }
}
