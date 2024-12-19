import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-workus',
  standalone: true,
  imports: [CommonModule, NavbarComponent,FooterComponent],
  templateUrl: './workus.component.html',
  styleUrl: './workus.component.css',
})
export class WorkusComponent {
  jobs = [
    {
      id: 1,
      title: 'Product Designer',
      location: 'New York, USA',
      aboutRole: 'Have a deep understanding of CX, design beyond screens and colours...',
      responsibilities: 'Act as the voice of the business customer...',
      benefits: 'An opportunity to be a core team member...',
      learn: ['How to design and build a global quality next-generation product...'],
      qualifications: 'Proficiency with visual design programs such as Figma...'
    },
    {
      id: 2,
      title: 'Software Engineer',
      location: 'London, UK',
      aboutRole: 'Develop scalable software solutions for enterprise customers...',
      responsibilities: 'Write clean, efficient, and maintainable code...',
      benefits: 'An opportunity to work with cutting-edge technologies...',
      learn: ['How to scale applications to millions of users...'],
      qualifications: 'Proficiency in C#, ASP.NET Core, and SQL Server...'
    },
    {
      id: 3,
      title: 'Data Analyst',
      location: 'Sydney, Australia',
      aboutRole: 'Analyze and interpret complex datasets to inform business decisions...',
      responsibilities: 'Collaborate with teams to provide data-driven insights...',
      benefits: 'A role that offers flexible working arrangements...',
      learn: ['How to use advanced analytics tools to optimize operations...'],
      qualifications: 'Strong skills in SQL, Python, and Power BI...'
    }
  ];

  visibilityState: { [key: number]: boolean } = {};

  toggleJobDescription(jobId: number): void {
    this.visibilityState[jobId] = !this.visibilityState[jobId];
  }

  isDescriptionVisible(jobId: number): boolean {
    return !!this.visibilityState[jobId];
  }
}
