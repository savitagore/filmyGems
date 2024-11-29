import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workus',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './workus.component.html',
  styleUrl: './workus.component.css'
})
export class WorkusComponent {
  isDescriptionVisible = false;

  // Button text state
  buttonText = 'View Job';

  // Function to toggle visibility of job description and footer
  toggleJobDescription() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
    // Change button text when clicked
    this.buttonText = this.isDescriptionVisible ? 'Apply Job' : 'View Job';
  }
}
