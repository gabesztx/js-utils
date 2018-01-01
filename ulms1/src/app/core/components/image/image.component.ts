import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { fadeImageKeyFrameAnimation } from '../../../animations/common-animation';
import { fadeInKeyFrameAnimation } from '../../../animations/common-animation';

declare var $: any;

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
    public isShowImage;

    constructor() {}

    ngOnChanges() {
        const img = new Image();
        img.onload = () => {
            this.imageSrc = img.src;
            // this.isShowImage = true;
            // setTimeout(() => {}, 100);
        };
        img.src = this.imageUrl;
    }
    clickElement() {
        if (this.clickElementFn.observers.length) {
            this.clickElementFn.emit();
        }
    }

    imageLoadStart(event: any) {
        // const element = $(event.element.parentElement.children[1]);
        // element.remove();
    }
}
