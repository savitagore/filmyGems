import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { PlansComponent } from './pages/plans/plans.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';


export const routes: Routes = [
  { path: '', component: HeaderComponent },
  {
    path:'plans',
    component:PlansComponent
  },{
    path:'profile',
    component:CreateProfileComponent
  }

];
