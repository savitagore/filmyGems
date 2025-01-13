import { Routes } from '@angular/router';
import { HeaderComponent } from './Reuseable/header/header.component';
import { PlansComponent } from './pages/plans/plans.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PrivacypolicyComponent } from './footer/pages/privacypolicy/privacypolicy.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

import { ArtistMainPageComponent } from './pages/artist-main-page/artist-main-page.component';

import { TalentshowComponent } from './pages/talentshow/talentshow.component';
import { SignupComponent } from './login/pages/signup/signup.component';
import { LoginComponent } from './login/pages/login/login.component';
import { ContinueLoginComponent } from './login/pages/continue-login/continue-login.component';
import { SendOTPComponent } from './login/pages/send-otp/send-otp.component';
import { EnterOTPComponent } from './login/pages/enter-otp/enter-otp.component';
import { ForgottPasswordComponent } from './login/pages/forgott-password/forgott-password.component';
import { ResetPasswordComponent } from './login/pages/reset-password/reset-password.component';
import { WorkusComponent } from './footer/pages/workus/workus.component';
// import { AdminComponent } from './Admin-Dashboard/admin/admin.component';
// import { SidebarComponent } from './Admin-Dashboard/admin/sidebar/sidebar.component';

export const routes: Routes = [
  
  { path: '', 
    component: HeaderComponent
    
   },
  {
    path: 'plans',
    component: PlansComponent,
  },
  {
    path: 'profile',
    component: CreateProfileComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'policy',
    component: PrivacypolicyComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'artistMain',
    component: ArtistMainPageComponent,
  },
  {
    path: 'talent-show',
    component: TalentshowComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'send-OTP',
    component: SendOTPComponent,
  },
  {
    path: 'enter-OTP',
    component: EnterOTPComponent,
  },
  {
    path: 'forgott-pass',
    component: ForgottPasswordComponent,
  },
  {
    path: 'reset-pass',
    component: ResetPasswordComponent,
  },
  {
    path: 'continue-login',
    component: ContinueLoginComponent,
  },
  {
    path: 'work-us',
    component: WorkusComponent
  },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./Admin-Dashboard/admin/admin.module').then(m => m.AdminModule)
  // }

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./Admin-Dashboard/admin/admin-routing.module').then(m => m.AdminRoutingModule)
  },
  {
    path: '**',
    redirectTo: '/home'
  }

  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  // },
  // {
  //   path: '**',
  //   redirectTo: '/home'
  // }


  // {
  //   path: '',
  //   redirectTo: '/home', // Default route
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: '/home' // Fallback for unknown routes
  // }
];
