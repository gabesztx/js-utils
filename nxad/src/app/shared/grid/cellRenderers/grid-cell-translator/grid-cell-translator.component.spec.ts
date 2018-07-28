import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCellTranslatorComponent } from './grid-cell-translator.component';

describe('GridCellTranslatorComponent', () => {
    let component: GridCellTranslatorComponent;
    let fixture: ComponentFixture<GridCellTranslatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GridCellTranslatorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GridCellTranslatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
