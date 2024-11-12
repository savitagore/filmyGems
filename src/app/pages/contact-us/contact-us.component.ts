import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  backgroundImageUrl: string = 'assets/contactUs/cantactUS-bg.png';


}
