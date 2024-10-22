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
  isTermsActive: boolean = false;
  isPrivacyActive: boolean = true;
  isFaqActive: boolean = false;
  islicenseActive:boolean=false;

  toggleSection(section: string) {
    this.isTermsActive = false;
    this.isPrivacyActive = false;
    this.isFaqActive = false;
    this.islicenseActive=false;


    if (section === 'terms') {
      this.isTermsActive = true;
    } else if (section === 'privacy') {
      this.isPrivacyActive = true;
    } else if (section === 'faq') {
      this.isFaqActive = true;
    } else if(section ===  'license'){
      this.islicenseActive=true;
    }
    else {
      console.log('Unknown section:', section);
    }


    console.log({
      isTermsActive: this.isTermsActive,
      isPrivacyActive: this.isPrivacyActive,
      isFaqActive: this.isFaqActive
    });
  }


}
