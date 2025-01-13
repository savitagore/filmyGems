import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../Reuseable/navbar/navbar.component';
import { FooterComponent } from '../../Reuseable/footer/footer.component';
import { StartjourneyComponent } from '../../Reuseable/startjourney/startjourney.component';


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
  isMonthly :Boolean= true;
  toggleView(view: string): void {
    // Toggle based on the string value ('monthly' or 'yearly')
    this.isMonthly = (view === 'monthly');
  }
}
