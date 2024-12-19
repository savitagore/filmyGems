import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { SignupvalidationService } from '../../../core/Services/signupValidation/signupvalidation.service';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,LoginCarasoualComponent,TooltipModule,ReactiveFormsModule],
  providers:[SignupvalidationService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword1: boolean = false;
  showPassword2: boolean = false;
  loginForm: FormGroup;

  constructor( private fb: FormBuilder, private router: Router, private signupService:SignupvalidationService) {
    this.loginForm = this.fb.group(
      {
        email: [ '', [  Validators.required,  Validators.pattern( '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$' ),],],
        password: [ '',[ Validators.required, Validators.minLength(8), Validators.pattern( '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$' ), ], ],
      },

    );
  }

  togglePassword(fieldNumber: number) {
    if (fieldNumber === 1) {
      this.showPassword1 = !this.showPassword1;
    } else if (fieldNumber === 2) {
      this.showPassword2 = !this.showPassword2;
    }
  }

  getEmailTooltipMessage(): string {
    const control = this.loginForm.get('email');
    return control ? this.signupService.getEmailErrorMessage(control) : '';
  }
  getPasswordPatternTooltip(): string {
    return this.signupService.getPasswordPatternErrorMessage();
  }
  onLogin(): void {
    if (this.loginForm.valid) {
      console.log('Form Data:', this.loginForm.value);
    } else {
      console.log('Form is invalid. Please fill all required fields correctly.');
      this.loginForm.markAllAsTouched();
    }
  }


}



