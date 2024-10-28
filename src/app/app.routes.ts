import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { PlansComponent } from './pages/plans/plans.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PrivacypolicyComponent } from './footer/pages/privacypolicy/privacypolicy.component';
import { Component } from '@angular/core';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ArtistMainPageComponent } from './pages/artist-main-page/artist-main-page.component';


export const routes: Routes = [
  { path: '', component: HeaderComponent },
  {
    path:'plans',
    component:PlansComponent
  },{
    path:'profile',
    component:CreateProfileComponent
  },
  {
    path:'about',
    component:AboutUsComponent
  },
    {
    path:'policy',
    component:PrivacypolicyComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'artistMain',
    component:ArtistMainPageComponent
  }


];
