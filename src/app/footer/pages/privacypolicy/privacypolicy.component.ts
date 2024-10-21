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
  isTermsActive: boolean = false; // Initialize to false to hide by default


  toggleSection(section: string) {
    if (section === 'terms') {
      this.isTermsActive = true;  // Show terms, hide privacy
    } else if (section === 'privacy') {
      this.isTermsActive = false; // Show privacy, hide terms
    }
  }
}
