import { Component, OnInit, Input, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
    selector: 'nx-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
    @Input() titleKey: string;
    @Input() helpLabelKey = 'help';
    @Input() helpTextKey: string;
    modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}

    ngOnInit() {}

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

}
