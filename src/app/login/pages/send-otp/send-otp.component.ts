import { Component } from '@angular/core';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupvalidationService } from '../../../core/Services/signupValidation/signupvalidation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-send-otp',
  standalone: true,
  imports: [LoginCarasoualComponent,RouterLink ,ReactiveFormsModule,CommonModule],
  providers:[SignupvalidationService],
  templateUrl: './send-otp.component.html',
  styleUrl: './send-otp.component.css'
})
export class SendOTPComponent {
  sentotpForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder,private signupService:SignupvalidationService) {
    this.sentotpForm = this.fb.group(
      {
        mobile: [  '', [Validators.required, Validators.pattern('^[0-9]{10}$')], Validators.maxLength(10),],
      },
    );
  }
  onMobileInput(event: any): void {
    const input = event.target;
    const value = input.value;
    const values = event.target.value;
    event.target.value = values.replace(/[^0-9]/g, '');
    if (value.length > 9) {
      input.blur();
    }
  }
  get mobile() {
    return this.sentotpForm.get('mobile');
  }
  getMobileTooltipMessage(): string {
    return this.signupService.getMobileErrorMessage(this.mobile as AbstractControl);
  }
}
