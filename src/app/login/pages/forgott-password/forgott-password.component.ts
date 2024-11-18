import { Component } from '@angular/core';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgott-password',
  standalone: true,
  imports: [LoginCarasoualComponent,RouterLink],
  templateUrl: './forgott-password.component.html',
  styleUrl: './forgott-password.component.css'
})
export class ForgottPasswordComponent {

}
