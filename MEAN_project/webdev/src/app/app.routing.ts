/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';

import{LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from "./components/user/register/register.component";
import {ProfileComponent} from "./components/user/profile/profile.component";
import {WebsiteNewComponent} from "./components/website/website-new/website-new.component";
import {WebsiteUlstComponent} from "./components/website/website-ulst/website-ulst.component";
import {WebsiteEditComponent} from "./components/website/website-edit/website-edit.component";
import {PageUlstComponent} from "./components/page/page-ulst/page-ulst.component";
import {PageNewComponent} from "./components/page/page-new/page-new.component";
import {PageEditComponent} from "./components/page/page-edit/page-edit.component";
import {WidgetEditComponent} from "./components/widget/widget-edit/widget-edit.component";
import {WidgetChooseComponent} from "./components/widget/widget-choose/widget-choose.component";
import {WidgetUlstComponent} from "./components/widget/widget-ulst/widget-ulst.component";
import {AuthGuard} from "./services/auth-gaurd.service";


const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path:'user/:uid/website', component:WebsiteUlstComponent},
  {path:'user/:uid/website/new', component:WebsiteNewComponent},
  {path:'user/:uid/website/:wid', component:WebsiteEditComponent},
  {path:'user/:uid/website/:wid/page', component:PageUlstComponent},
  {path:'user/:uid/website/:wid/page/new', component:PageNewComponent},
  {path:'user/:uid/website/:wid/page/:pid', component:PageEditComponent},
  {path:'user/:uid/website/:wid/page/:pid/widget', component:WidgetUlstComponent},
  {path:'user/:uid/website/:wid/page/:pid/widget/new', component:WidgetChooseComponent},
  {path:'user/:uid/website/:wid/page/:pid/widget/:wgid', component:WidgetEditComponent}





];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
