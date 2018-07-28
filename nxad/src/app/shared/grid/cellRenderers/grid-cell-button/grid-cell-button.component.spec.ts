import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCellButtonComponent } from './grid-cell-button.component';

describe('GridCellButtonComponent', () => {
    let component: GridCellButtonComponent;
    let fixture: ComponentFixture<GridCellButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GridCellButtonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GridCellButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
