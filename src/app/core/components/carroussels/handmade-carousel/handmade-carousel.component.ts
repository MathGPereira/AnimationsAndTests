import { Component } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-handmade-carousel',
  templateUrl: './handmade-carousel.component.html',
  styleUrls: ['./handmade-carousel.component.scss']
})
export class HandmadeCarouselComponent {

    private _activeImageIndex = 1;
    public typesIcons = {
        'left': faArrowLeft,
        'right': faArrowRight
    };
    public indexes = [1, 2, 3, 4];

    public changeImage(info: number): void {
        if(info === 1) {
            this.activeImageIndex < 4 ? this.activeImageIndex += 1 : this.activeImageIndex = 1;
            console.log(this.activeImageIndex)
        }else {
            this.activeImageIndex > 1 ? this.activeImageIndex -= 1 : this.activeImageIndex = 4;
            console.log(this.activeImageIndex)
        }
    }

    get activeImageIndex(): number {
        return this._activeImageIndex;
    }

    set activeImageIndex(index: number) {
        this._activeImageIndex = index;
    }
}
