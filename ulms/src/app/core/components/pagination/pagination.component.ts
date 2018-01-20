import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavigationStart, RoutesRecognized, NavigationEnd} from '@angular/router';

@Component({
    selector: 'ulms-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnChanges, OnInit {

    @Input() totalItemsNumber: number;
    @Input() itemsPerPage: number;
    @Input() currentPage: number;
    @Input() totalPages: number;
    @Input() itemIndex: string;

    public counterPageElement: any;

    constructor(public router: Router) {}

    ngOnChanges() {}

    ngOnInit() {
        this.counterPageElement = this.getCounterElement();
        this.setPageCounter(this.currentPage);
    }
    navigatePage(currentPage: number) {
        this.setPageCounter(currentPage);
        if (this.currentPage !== currentPage) {
            this.router.navigate(['courses', 'list', this.itemIndex, currentPage]);
        }
    }
    setPageCounter(currentPage: number) {
        this.counterPageElement.textContent = currentPage + ' / ' + this.totalPages;
    }

    getCounterElement() {
        const e = document.createElement('div');
        const pagerElement = document.querySelector('.pager');
        e.innerHTML = '<li class="pageCounter"></li>';
        pagerElement.insertBefore(e.firstChild, pagerElement.children[1]);
        return document.querySelector('.pageCounter');
    }

    pageChangeEvent(event: any): void {
        this.navigatePage(event.page);
    }
}
