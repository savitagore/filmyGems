import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterLink],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css'
})
export class CreateProfileComponent {
  backgroundImageUrl: string = 'assets/create-profile/bg-main.png';
}
