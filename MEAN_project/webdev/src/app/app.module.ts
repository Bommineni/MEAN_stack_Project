import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {QuillEditorModule} from 'ngx-quill-editor';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {TestService} from './services/test.service.client';
import{UserService} from "./services/user.service.client";


import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteUlstComponent } from './components/website/website-ulst/website-ulst.component';
import { PageUlstComponent } from './components/page/page-ulst/page-ulst.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { WidgetChooseComponent } from './components/widget/widget-choose/widget-choose.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetUlstComponent } from './components/widget/widget-ulst/widget-ulst.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';

import {WebsiteService} from "./services/website.service.client";
import {PageService} from "./services/page.service.client";
import {WidgetService} from "./services/widget.service.client";
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
import {SharedService} from "./services/shared.service";
import {AuthGuard} from "./services/auth-gaurd.service";

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteUlstComponent,
    PageUlstComponent,
    PageEditComponent,
    PageNewComponent,
    WidgetChooseComponent,
    WidgetEditComponent,
    WidgetUlstComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    FlickrImageSearchComponent,
    WidgetHtmlComponent,
    WidgetTextComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    QuillEditorModule
  ],
  // Client Side services here
  providers: [ TestService, UserService, WebsiteService, PageService, WidgetService, SharedService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
