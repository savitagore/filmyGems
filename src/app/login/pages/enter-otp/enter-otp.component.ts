import { Component } from '@angular/core';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { Router, RouterLink } from '@angular/router';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enter-otp',
  standalone: true,
  imports: [LoginCarasoualComponent,RouterLink,InputOtpModule,FormsModule],
  templateUrl: './enter-otp.component.html',
  styleUrl: './enter-otp.component.css'
})
export class EnterOTPComponent {
  constructor( private router: Router,){

  }
  value : any
  otp: string[] = ['', '', '', ''];

  moveToNext(event: any, index: number): void {
    const input = event.target;
    if (input.value.length === 1 && index < this.otp.length - 1) {
      const nextInput = input.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  verifyOTP(): void {
    const otpValue = this.otp.join('');


    this.router.navigate(['/forgott-pass']);

  }

  resendOTP(): void {


  }
}
