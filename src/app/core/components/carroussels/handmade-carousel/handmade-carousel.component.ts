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
    public images = [
        {
            index: 1,
            alt: 'Campo verde com muitas árvores ao redor e um céu azul com algumas núvens'
        },
        {
            index: 2,
            alt: 'Canoa parada em uma pequena margem de lago ao por do sol com algumas montanhas ao fundo'
        },
        {
            index: 3,
            alt: 'Cachoeiras com águas cristalinas em um dia ensolarado, com poucas núvens e um belo lago e muitas árvores verdes ao redor'
        },
        {
            index: 4,
            alt: 'Uma pequena lagoa em uma floresta com raios de luz batendo na água, rochas com musgo e algumas plantas no chão'
        },
    ];

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
