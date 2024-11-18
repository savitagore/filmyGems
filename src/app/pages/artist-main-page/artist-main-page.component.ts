import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { SearchHeaderComponent } from '../../shared/search-header/search-header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artist-main-page',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FooterComponent,SearchHeaderComponent,FormsModule],
  templateUrl: './artist-main-page.component.html',
  styleUrl: './artist-main-page.component.css'
})
export class ArtistMainPageComponent {

}


