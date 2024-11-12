import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-talentshow',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FooterComponent],
  templateUrl: './talentshow.component.html',
  styleUrl: './talentshow.component.css'
})
export class TalentshowComponent {

}
