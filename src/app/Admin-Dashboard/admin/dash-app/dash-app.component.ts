import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
// import { AdminSettingsComponent } from '../../../pages/admin-settings/admin-settings.component';

@Component({
  selector: 'app-dash-app',
  standalone: true,
  imports: [],
  templateUrl: './dash-app.component.html',
  styleUrl: './dash-app.component.css'
})
export class DashAppComponent {
 
 isSidenavOpen: boolean = false;

 openNav() {
   this.isSidenavOpen = true;
 }

 closeNav() {
   this.isSidenavOpen = false;
 }
}
