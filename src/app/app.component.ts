import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,ToastModule],
  providers:[MessageService],
  styleUrl: './app.component.css',
  templateUrl:'./app.component.html',
})
export class AppComponent {
  title = 'FilmyGems';
     
}
