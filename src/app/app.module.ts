import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';





import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';

import { CardModule } from 'primeng/card';

import { MessagesModule } from 'primeng/messages';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';

import { TabViewModule } from 'primeng/tabview';




import { HttpClientModule } from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';

import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
;
import { FileUploadModule } from 'primeng/fileupload';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';


import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TagModule } from 'primeng/tag';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ContextMenuModule } from 'primeng/contextmenu';




import { AutoCompleteModule } from 'primeng/autocomplete';
import { AnimateModule } from 'primeng/animate';

import { CalendarModule } from 'primeng/calendar';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    CardModule,
    MessagesModule,
    TabViewModule,
    MessageModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    BrowserAnimationsModule,


    DialogModule,
    DropdownModule,
    ConfirmPopupModule,

    InputNumberModule,
    ConfirmDialogModule,
    TagModule,
    PanelMenuModule,
    ContextMenuModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,

    ToastModule,
    CalendarModule,
    TriStateCheckboxModule,
    AutoCompleteModule,
    AnimateModule,
    PanelMenuModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    MessagesModule,
    PanelModule,
    FileUploadModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
