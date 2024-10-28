import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

import { Router } from '@angular/router';


@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  constructor(private router: Router) {}


  navigateToTalentShow() {
    this.router.navigate(['talent-show']);
  }
}
