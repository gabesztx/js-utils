import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCellRowSelectorComponent } from './grid-cell-row-selector.component';

describe('GridCellRowSelectorComponent', () => {
    let component: GridCellRowSelectorComponent;
    let fixture: ComponentFixture<GridCellRowSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GridCellRowSelectorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GridCellRowSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
