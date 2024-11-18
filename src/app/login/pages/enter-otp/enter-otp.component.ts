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
    console.log('Entered OTP:', otpValue);
    // Add OTP verification logic here
  }

  resendOTP(): void {
    console.log('Resend OTP');
    // Implement OTP resend logic here
  }
}
