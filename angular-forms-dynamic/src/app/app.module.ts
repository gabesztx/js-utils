import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {FormComponent} from './component/form-component/form.component';
import {FormDataService} from './service/form-data.service';
import {FormDetailComponent} from './component/form-detail/form-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
