import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import Aos from 'aos';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit  {

  ngOnInit() {
    Aos.init({
      duration: 1200,  
    });
  }
}


