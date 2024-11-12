import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit  {


  ngOnInit() {
    Aos.init({
      duration: 1500,
    });
  }
}
