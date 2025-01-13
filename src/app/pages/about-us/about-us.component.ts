import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../Reuseable/navbar/navbar.component';
import { FooterComponent } from '../../Reuseable/footer/footer.component';

import { RouterLink } from '@angular/router';
import { StartjourneyComponent } from '../../Reuseable/startjourney/startjourney.component';

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
    if (this.currentIndex + 5 < this.images.length) {
      this.currentIndex += 1;
      this.updateVisibleImages();
    }
  }

  prevImage() {
    if (this.currentIndex >= 5) {
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

  partners = [
    { img: 'assets/aboutUs/partner-img1.svg', alt: 'Partner 1' },
    { img: 'assets/aboutUs/partner-img2.svg', alt: 'Partner 2' },
    { img: 'assets/aboutUs/partner-img3.svg', alt: 'Partner 3' },
    { img: 'assets/aboutUs/partner-img4.svg', alt: 'Partner 4' },
    { img: 'assets/aboutUs/partner-img5.svg', alt: 'Partner 5' },
    { img: 'assets/aboutUs/partner-img6.svg', alt: 'Partner 6' },
    { img: 'assets/aboutUs/partner-img7.svg', alt: 'Partner 7' }
  ];

  startIndex = 0;
  visiblePartners: { img: string; alt: string }[] = [];

  ngOnInit() {
    this.updateVisiblePartners();
  }

  updateVisiblePartners() {
    this.visiblePartners = this.partners.slice(this.startIndex, this.startIndex + 5);
  }

  nextPartners() {
    if (this.startIndex + 5 < this.partners.length) {
      this.startIndex++;
      this.updateVisiblePartners();
    }
  }

  prevPartners() {
    if (this.startIndex > 5) {
      this.startIndex--;
      this.updateVisiblePartners();
    }
  }
}
