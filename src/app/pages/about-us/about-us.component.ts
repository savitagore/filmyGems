import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  backgroundImageUrl: string = 'assets/aboutUs/about-Bg.svg';
}
