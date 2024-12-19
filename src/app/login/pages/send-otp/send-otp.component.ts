import { Component } from '@angular/core';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { Router, RouterLink } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SignupvalidationService } from '../../../core/Services/signupValidation/signupvalidation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-send-otp',
  standalone: true,
  imports: [
    LoginCarasoualComponent,
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [SignupvalidationService],
  templateUrl: './send-otp.component.html',
  styleUrl: './send-otp.component.css',
})
export class SendOTPComponent {
  sentotpForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private signupService: SignupvalidationService
  ) {
    this.sentotpForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }
  onMobileInput(event: any): void {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
    this.sentotpForm.get('mobile')?.setValue(input.value);
  }

  getMobileTooltipMessage(): string {
    const control = this.sentotpForm.get('mobile');
    return control ? this.signupService.getMobileErrorMessage(control) : '';
  }
  sendOTP(){
    if (this.sentotpForm.valid) {
      console.log('Form Data:', this.sentotpForm.value);
      this.router.navigate(['/enter-OTP']);
    } else {
      console.error('Form is invalid. Check errors below:');

    }
  }
}
