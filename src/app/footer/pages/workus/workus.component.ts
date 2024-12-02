import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workus',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './workus.component.html',
  styleUrl: './workus.component.css',
})
export class WorkusComponent {
  jobs = [
    {
      id: 1,
      title: 'Product Designer',
      location: 'New York, USA',
    },
    {
      id: 2,
      title: 'Software Engineer',
      location: 'London, UK',
    },
    {
      id: 3,
      title: 'Data Analyst',
      location: 'Sydney, Australia',
    },
    {
      id: 4,
      title: 'Content Designer',
      location: 'pune',
    },
  ];

  visibilityState: { [key: number]: boolean } = {};
  toggleJobDescription(jobId: number): void {
    this.visibilityState[jobId] = !this.visibilityState[jobId];
  }

  isDescriptionVisible(jobId: number): boolean {
    return !!this.visibilityState[jobId];
  }
}
