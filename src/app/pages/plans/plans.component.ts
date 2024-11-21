import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { StartjourneyComponent } from '../../shared/startjourney/startjourney.component';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,StartjourneyComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  backgroundImageUrl: string = 'assets/img/plans-bg.png';
  bgImage: string = 'assets/plans/music-imgs.png';
  isMonthly: boolean = false; // Default to Yearly view

  toggleView(view: string): void {
    this.isMonthly = view === 'monthly';
  }
}
