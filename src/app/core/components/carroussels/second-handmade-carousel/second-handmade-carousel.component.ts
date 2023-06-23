import { Component } from '@angular/core';

@Component({
  selector: 'app-second-handmade-carousel',
  templateUrl: './second-handmade-carousel.component.html',
  styleUrls: ['./second-handmade-carousel.component.scss']
})
export class SecondHandmadeCarouselComponent {

    private _activeIndexImage = 1;
    public indexes = [1, 2, 3, 4, 5, 6, 7, 8];

    get activeIndexImage(): number {
        return this._activeIndexImage;
    }

    set activeIndexImage(info: number) {
        this._activeIndexImage = info;
    }
}
