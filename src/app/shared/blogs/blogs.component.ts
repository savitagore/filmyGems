import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { RouterLink } from '@angular/router';

import { Router } from '@angular/router';
import { SearchHeaderComponent } from '../search-header/search-header.component';


@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [RouterLink,SearchHeaderComponent,CommonModule],
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



