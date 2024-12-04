import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { StartjourneyComponent } from '../../shared/startjourney/startjourney.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    StartjourneyComponent,
    RouterLink,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  backgroundImageUrl: string = 'assets/aboutUs/about-Bg.svg';
  bgImage: string = 'assets/aboutUs/musical-imgs.png';

  images: string[] = [
    'assets/aboutUs/trusted-Img1.svg',
    'assets/aboutUs/trusted-Img2.svg',
    'assets/aboutUs/trusted-Img3.svg',
    'assets/aboutUs/trusted-Img4.svg',
    'assets/aboutUs/trusted-Img5.svg',
    'assets/aboutUs/trusted-Img6.svg',
    'assets/aboutUs/trusted-Img1.svg',
    'assets/aboutUs/trusted-Img2.svg',
    'assets/aboutUs/trusted-Img3.svg',
    'assets/aboutUs/trusted-Img4.svg',
    'assets/aboutUs/trusted-Img5.svg',
    'assets/aboutUs/trusted-Img6.svg',
    'assets/aboutUs/trusted-Img1.svg',
    'assets/aboutUs/trusted-Img2.svg',
    'assets/aboutUs/trusted-Img3.svg',
    'assets/aboutUs/trusted-Img4.svg',
    'assets/aboutUs/trusted-Img5.svg',
    'assets/aboutUs/trusted-Img6.svg',
    'assets/aboutUs/trusted-Img1.svg',
    'assets/aboutUs/trusted-Img2.svg',
    'assets/aboutUs/trusted-Img3.svg',
    'assets/aboutUs/trusted-Img4.svg',
    'assets/aboutUs/trusted-Img5.svg',
    'assets/aboutUs/trusted-Img6.svg',
  ];

  currentIndex = 0;

  visibleImages: string[] = this.images.slice(
    this.currentIndex,
    this.currentIndex + 6
  );

  nextImage() {
    if (this.currentIndex + 1 < this.images.length) {
      this.currentIndex += 1;
      this.updateVisibleImages();
    }
  }

  prevImage() {
    if (this.currentIndex >= 1) {
      this.currentIndex -= 1;
      this.updateVisibleImages();
    }
  }

  updateVisibleImages() {
    this.visibleImages = this.images.slice(
      this.currentIndex,
      this.currentIndex + 5
    );
  }
}
