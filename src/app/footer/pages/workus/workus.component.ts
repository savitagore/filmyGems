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

}
