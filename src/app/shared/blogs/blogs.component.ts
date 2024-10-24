import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  constructor(private router: Router) {}


  navigateToTalentShow() {
    this.router.navigate(['talent-show']);
  }
}
