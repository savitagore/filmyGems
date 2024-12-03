import { Component } from '@angular/core';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupvalidationService } from '../../../core/Services/signupValidation/signupvalidation.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [LoginCarasoualComponent,RouterLink,CommonModule,ReactiveFormsModule,FormsModule],
  providers:[SignupvalidationService],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  showPassword1 = false;
  showPassword2 = false;
//   constructor(private router: Router,private fb: FormBuilder){
//     this.resetPasswordForm = this.fb.group({newPassword: [
//       '',
//       [
//         Validators.required,
//         Validators.minLength(8),
//         Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/),
//       ],
//     ],
//     confirmPassword: ['', [Validators.required]],
//   }, { validators: this.passwordMatchValidator });
// }


constructor(private router: Router, private fb: FormBuilder,private signupService:SignupvalidationService) {
  this.resetPasswordForm = this.fb.group(
    {
      password: [ '',[ Validators.required, Validators.minLength(8), Validators.pattern( '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$' ), ], ],
      confirmPassword: ['', Validators.required],
    },
    { validator: this.matchPasswords }
  );
}


togglePassword(fieldNumber: number) {
    if (fieldNumber === 1) {
      this.showPassword1 = !this.showPassword1;
    } else if (fieldNumber === 2) {
      this.showPassword2 = !this.showPassword2;
    }
  }
  matchPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }
  passwordMatchValidator(control: FormGroup): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password?.value !== confirmPassword?.value) {
      return { passwordsMismatch: true };
    }
    return null;
  }
  // passwordMatchValidator(group: FormGroup) {
  //   const newPassword = group.get('newPassword')?.value;
  //   const confirmPassword = group.get('confirmPassword')?.value;
  //   return newPassword === confirmPassword ? null : { mismatch: true };
  // }

  continueLogin() {
    this.router.navigate(['/continue-login']);
    if (this.resetPasswordForm.valid) {
      console.log('Form Submitted', this.resetPasswordForm.value);
    } else {
      console.log('Form Invalid');
      this.resetPasswordForm.markAllAsTouched(); // Highlight errors
    }
  }
  get password() {
    return this.resetPasswordForm.get('password');
  }
  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }

  getPasswordPatternTooltip(): string {
    return this.signupService.getPasswordPatternErrorMessage();
  }
  getPasswordMismatchTooltip(): string {
    return this.signupService.getPasswordMismatchErrorMessage();
  }
}

