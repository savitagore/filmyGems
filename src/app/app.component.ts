import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './dashboard/pages/sidebar/sidebar.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent, CommonModule, SidebarComponent,ToastModule],
  providers:[MessageService],
  styleUrl: './app.component.css',
  templateUrl:'./app.component.html',
})
export class AppComponent {
  title = 'FilmyGems';
   
}
