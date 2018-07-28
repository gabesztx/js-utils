// External imports
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MatInputModule, MatButtonModule, MatIconModule, MatTooltipModule, MatSidenavModule } from '@angular/material';
// Nexius Core imports
import { NxCoreModule } from '@nexius/core';
// Guards imports
import {PreloadGuard} from './guards/preload.guard';
// Services imports
import { AuthService } from './services/auth.service';
import { EmailuploadService } from './services/emailupload.service';
import { HttpService } from './services/http-service';

import { GridCellButtonComponent } from './grid/cellRenderers/grid-cell-button/grid-cell-button.component';
import { GridCellTranslatorComponent } from './grid/cellRenderers/grid-cell-translator/grid-cell-translator.component';
import { GridCellRowSelectorComponent } from './grid/cellRenderers/grid-cell-row-selector/grid-cell-row-selector.component';
import { DrawerMenuComponent } from './components/drawer-menu/drawer-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { EmailuploadComponent } from './components/emailupload/emailupload.component';
import { InviteEmailComponent } from './components/invite-email/invite-email.component';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatSidenavModule,
        NxCoreModule
    ],
    declarations: [
        GridCellButtonComponent,
        GridCellTranslatorComponent,
        GridCellRowSelectorComponent,
        DrawerMenuComponent,
        InviteEmailComponent,
        HeaderComponent,
        FooterComponent,
        TitleComponent,
        FileuploadComponent,
        EmailuploadComponent,
    ],
    exports: [
        // GridCellButtonComponent,
        // GridCellTranslatorComponent,
        // GridCellRowSelectorComponent,
        DrawerMenuComponent,
        InviteEmailComponent,
        HeaderComponent,
        FooterComponent,
        TitleComponent,
        FileuploadComponent,
        EmailuploadComponent,
    ],
    providers: [
        AuthService,
        PreloadGuard,
        HttpService,
        EmailuploadService,
        CookieService
    ],
    entryComponents: [
        GridCellButtonComponent,
        GridCellTranslatorComponent,
        GridCellRowSelectorComponent
    ]
})
export class SharedModule { }
