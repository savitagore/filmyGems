import { Component } from '@angular/core';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-enter-otp',
  standalone: true,
  imports: [LoginCarasoualComponent,RouterLink],
  templateUrl: './enter-otp.component.html',
  styleUrl: './enter-otp.component.css'
})
export class EnterOTPComponent {

}
