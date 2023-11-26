import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceLogoComponent } from './components/service-logo/service-logo.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:  'aboutUs',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServiceLogoComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contactUs',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
