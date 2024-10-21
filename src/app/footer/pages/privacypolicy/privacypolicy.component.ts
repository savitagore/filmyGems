import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-privacypolicy',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterLinkActive,FooterComponent,NavbarComponent],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.css'
})
export class PrivacypolicyComponent {
  // isTermsActive: boolean = false;


  // toggleSection(section: string) {
  //   if (section === 'terms') {
  //     this.isTermsActive = true;
  //   } else if (section === 'privacy') {
  //     this.isTermsActive = false;
  //   }
  //   else if (section === 'faq') {
  //     this.isTermsActive = false;
  //   }
  // }
  isTermsActive: boolean = false;
  isPrivacyActive: boolean = false;
  isFaqActive: boolean = false; // New state for FAQ

  toggleSection(section: string) {
    // Reset all section states first
    this.isTermsActive = false;
    this.isPrivacyActive = false;
    this.isFaqActive = false;

    // Toggle the active section
    if (section === 'terms') {
      this.isTermsActive = true;
    } else if (section === 'privacy') {
      this.isPrivacyActive = true;
    } else if (section === 'faq') {
      
      this.isFaqActive = true;  // Show FAQ section
    }
  }
}
