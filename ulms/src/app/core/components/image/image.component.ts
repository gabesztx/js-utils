import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { fadeImageKeyFrameAnimation } from '../../../animations/common-animation';
import { fadeInKeyFrameAnimation } from '../../../animations/common-animation';


@Component({
    selector: 'ulms-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
    animations: [fadeInKeyFrameAnimation, fadeImageKeyFrameAnimation]
})
export class ImageComponent implements OnChanges {
    @Input() imageUrl;
    @Output() clickElementFn = new EventEmitter<any>();
    public imageSrc;
    public isShowImage = false;

    constructor() {}

    ngOnChanges() {
        const img = new Image();
        img.onload = () => {
            this.imageSrc = img.src;
        };
        img.src = this.imageUrl;
    }
    clickElement() {
        if (this.clickElementFn.observers.length) {
            this.clickElementFn.emit();
        }
    }
}
