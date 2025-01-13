import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from '../blogs/blogs.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchHeaderComponent } from '../search-header/search-header.component';
import { StartjourneyComponent } from '../startjourney/startjourney.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,CommonModule,BlogsComponent,NavbarComponent,StartjourneyComponent,SearchHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit  {
  backgroundImageUrl: string = 'assets/landing_Img/landing-img-bg.png';
 
  ngOnInit() {
    Aos.init({
      duration: 1200,
    });
  }
}


