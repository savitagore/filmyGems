import { Component } from '@angular/core';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { Router, RouterLink } from '@angular/router';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';
import { SignupvalidationService } from '../../../core/Services/signupValidation/signupvalidation.service';
import { CommonModule } from '@angular/common';
import { MaskPhoneNumberPipe } from '../../../core/Pipe/mask-phone-number.pipe';

@Component({
  selector: 'app-enter-otp',
  standalone: true,
  imports: [LoginCarasoualComponent,RouterLink,InputOtpModule,FormsModule,CommonModule,MaskPhoneNumberPipe],
  providers:[SignupvalidationService],
  templateUrl: './enter-otp.component.html',
  styleUrl: './enter-otp.component.css'
})
export class EnterOTPComponent {
  phoneNumber: string = '98123xxxx23';
  value : any
  otp: string[] = ['', '', '', ''];
  constructor( private router: Router,private signupService:SignupvalidationService){}


  moveToNext(event: any, index: number): void {
    const input = event.target;
    if (input.value.length === 1 && index < this.otp.length - 1) {
      const nextInput = input.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
  get errorMessage(): string {
    return this.signupService.getErrorMessage();
  }
  verifyOTP(): void {
      const isValid = this.signupService.validateOtp(this.value);
    if (isValid) {
    this.router.navigate(['/forgott-pass']);
    }
  }

  resendOTP(): void {


  }


}
