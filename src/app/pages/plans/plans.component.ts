import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  backgroundImageUrl: string = 'assets/img/plans-bg.png';
}
