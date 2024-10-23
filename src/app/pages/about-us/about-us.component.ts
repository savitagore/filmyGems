import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { StartjourneyComponent } from '../../shared/startjourney/startjourney.component';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,StartjourneyComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  backgroundImageUrl: string = 'assets/aboutUs/about-Bg.svg';
  bgImage: string = 'assets/aboutUs/musical-imgs.png';
}
