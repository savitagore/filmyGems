import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';

import { AdminSettingComponent } from './pages/admin-setting/admin-setting.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
// import { UserSettingsComponent } from './pages/user-settings/user-settings.component';


const routes: Routes = [
  // { path: '', 
  //   component: AdminComponent }, 
  
  // {path:'dash',
  //   component:DashboardComponent
  // },
  // {
  //     path: 'sidebar',
  //     component: SidebarComponent
  //   },
  //   {
  //     path: 'adminS',
  //     component: AdminSettingsComponent
  //   },
  //   {
  //     path: 'userS',
  //     component: UserSettingsComponent
  //   }
  {
    path: '',
    component: AdminComponent, // AdminComponent serves as the wrapper
    children: [
      { path: 'dashboard', component: DashboardComponent }, 
      { path: 'adminS', component: AdminSettingComponent }, 
      { path: 'userS', component: UserSettingsComponent },   
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
