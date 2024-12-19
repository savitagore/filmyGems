import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
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
  isDigitalService:boolean=false;
  isCookiesPolicy:boolean=false

  toggleSection(section: string) {
    this.isTermsActive = false;
    this.isPrivacyActive = false;
    this.isFaqActive = false;
    this.islicenseActive=false;
    this.isDigitalService=false;
    this.isCookiesPolicy=false

    if (section === 'terms') {
      this.isTermsActive = true;
    } else if (section === 'privacy') {
      this.isPrivacyActive = true;
    } else if (section === 'faq') {
      this.isFaqActive = true;
    } else if(section ===  'license'){
      this.islicenseActive=true;
    }
    else if(section ===  'digital'){
      this.isDigitalService=true;
    }
    else if(section ===  'cookies'){
      this.isCookiesPolicy=true;
    }

    else {
      console.log('Unknown section:', section);
    }
  }

}



















