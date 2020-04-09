import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SliderComponentComponent } from './slider-component/slider-component.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Services', component: ServiceDetailsComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Contact', component: ContactUsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
