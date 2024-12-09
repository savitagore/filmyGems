import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { RouterLink } from '@angular/router';

import { Router } from '@angular/router';
import { SearchHeaderComponent } from '../search-header/search-header.component';
import { MaskPhoneNumberPipe } from '../../core/Pipe/mask-phone-number.pipe';


@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [RouterLink,CommonModule,MaskPhoneNumberPipe],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  constructor(private router: Router) {}


  navigateToTalentShow() {
    this.router.navigate(['talent-show']);
  }
  selectedCategory: string | null = null;

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
categories = [
    'Artist',
    'Director',
    'Casting Director',
    'Assistant Director',
    'Production Manager',
    'Executive Producer',
    'Associate Director',
    'Executive Producer',
    'Associate Director',
    'Executive Producer',
    'Casting Director',
    'Assistant Director',
    'Associate Director',
    'Executive Producer',

  ];

  currentIndex = 0;
  visibleCategories: string[] = this.categories.slice(this.currentIndex, this.currentIndex +7);

  movies = [
    {
      title: 'Pushpa: The Rule - Part 2',
      release: '6 DEC',
      language: 'English, Hindi',
      duration: '3h 15m',
      rent: 100,
      buy: 200,
      trailerCount: 3,
      poster: '/assets/landing_Img/push.jpg',
      trailerUrl: '/assets/movies/madame-web-trailer.mp4'
    },
    {
      title: 'Madame Web',
      release: '12 FEB',
      language: 'English,Hindi',
      duration: '1h 56m',
      rent: 150,
      buy: 250,
      trailerCount: 2,
      poster: '/assets/landing_Img/made.jpg',
      trailerUrl: '/assets/movies/avengers-trailer.mp4'
    },
    {
      title: 'KRRISH 4',
      release: '1 MARCH',
      language: 'Hindi,English',
      duration: '2h 28m',
      rent: 120,
      buy: 220,
      trailerCount: 4,
      poster: '/assets/landing_Img/krrish.jpg',
      trailerUrl: '/assets/movies/inception-trailer.mp4'
    }
  ];

  activeTrailerIndex: number | null = null;

  playTrailer(index: number): void {
    this.activeTrailerIndex = index;
  }




  nextCategory() {
    if (this.currentIndex + 7 < this.categories.length) {
      this.currentIndex++;
      this.updateVisibleCategories();
    }
  }

  previousCategory() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleCategories();
    }
  }

  updateVisibleCategories() {
    this.visibleCategories = this.categories.slice(this.currentIndex, this.currentIndex + 7);
}
}



