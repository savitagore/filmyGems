import { Component } from '@angular/core';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [LoginCarasoualComponent,RouterLink,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  showPassword1 = false;
  showPassword2 = false;
  constructor(private router: Router,private fb: FormBuilder){
    this.resetPasswordForm = this.fb.group({newPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/), // At least one uppercase and one number
      ],
    ],
    confirmPassword: ['', [Validators.required]],
  }, { validators: this.passwordMatchValidator });
}
 
  togglePassword(fieldNumber: number) {
    if (fieldNumber === 1) {
      this.showPassword1 = !this.showPassword1;
    } else if (fieldNumber === 2) {
      this.showPassword2 = !this.showPassword2;
    }
  }
  
  passwordMatchValidator(group: FormGroup) {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }

  continueLogin() {
    this.router.navigate(['/continue-login']);
    if (this.resetPasswordForm.valid) {
      console.log('Form Submitted', this.resetPasswordForm.value);
    } else {
      console.log('Form Invalid');
      this.resetPasswordForm.markAllAsTouched(); // Highlight errors
    }
  }
}

