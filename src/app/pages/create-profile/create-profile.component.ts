import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css'
})
export class CreateProfileComponent {
  backgroundImageUrl: string = 'assets/create-profile/bg-main.png';
}
