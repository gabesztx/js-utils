// External imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';


// Internal imports
import { TranslatePipe } from './pipes/translate.pipe';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MenuButtonComponent } from './components/main-menu/menu-button/menu-button.component';
import { ToLocalTimeSpanPipe } from './pipes/to-local-time-span.pipe';
import { TooltipPipe } from './pipes/tooltip.pipe';
import { ToReadableTime } from './pipes/to-readable-time';
import { ButtonComponent } from './components/button/button.component';
import { StatusLineComponent } from './components/status-line/status-line.component';
import { StatusTextComponent } from './components/status-text/status-text.component';
import { DropdownSplitComponent } from './components/dropdown-split/dropdown-split.component';
import { AccordingMenuComponent } from './components/according-menu/according-menu.component';
import { DescriptionComponent } from './components/description/description.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NavTabComponent } from './components/nav-tab/nav-tab.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopupModalComponent } from './components/popup-modal/popup-modal.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        BsDropdownModule.forRoot(),
        AccordionModule.forRoot(),
        PaginationModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations: [
        TranslatePipe,
        HeaderComponent,
        FooterComponent,
        MainMenuComponent,
        MenuButtonComponent,
        ToLocalTimeSpanPipe,
        TooltipPipe,
        ToReadableTime,
        ButtonComponent,
        StatusLineComponent,
        StatusTextComponent,
        DropdownSplitComponent,
        AccordingMenuComponent,
        DescriptionComponent,
        PaginationComponent,
        NavTabComponent,
        PopupModalComponent,
        SpinnerComponent
    ],
    exports: [
        TranslatePipe,
        ToLocalTimeSpanPipe,
        TooltipPipe,
        HeaderComponent,
        FooterComponent,
        ButtonComponent,
        StatusLineComponent,
        StatusTextComponent,
        DropdownSplitComponent,
        AccordingMenuComponent,
        DescriptionComponent,
        PaginationComponent,
        NavTabComponent,
        PopupModalComponent,
        SpinnerComponent
    ]
})
export class CoreModule {
}
