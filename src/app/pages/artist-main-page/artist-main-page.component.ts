import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../Reuseable/navbar/navbar.component';
import { FooterComponent } from '../../Reuseable/footer/footer.component';
import { SearchHeaderComponent } from '../../Reuseable/search-header/search-header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artist-main-page',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FooterComponent,SearchHeaderComponent,FormsModule],
  templateUrl: './artist-main-page.component.html',
  styleUrl: './artist-main-page.component.css'
})
export class ArtistMainPageComponent{
  currentBudget: number = 1000000; // Initial budget
    minBudget = 1000000;
    maxBudget = 5000000;
    progress: number = 0;

    updateProgress() {
        this.progress = ((this.currentBudget - this.minBudget) / (this.maxBudget - this.minBudget)) * 100;
    }

  categories = [
    { name: 'Artist', checked: false },
    { name: 'Director', checked: false },
    { name: 'Casting Director', checked: false },
    { name: 'Assistant Director', checked: false },
    { name: 'Associate Director', checked: false },
    { name: 'Executive Producer', checked: false },
    { name: 'Production Manager', checked: false }
  ];

}


