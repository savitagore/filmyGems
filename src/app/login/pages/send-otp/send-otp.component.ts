import { Component } from '@angular/core';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-send-otp',
  standalone: true,
  imports: [LoginCarasoualComponent,RouterLink],
  templateUrl: './send-otp.component.html',
  styleUrl: './send-otp.component.css'
})
export class SendOTPComponent {

}
