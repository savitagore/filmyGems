import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { Tooltip } from 'primeng/tooltip';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    RouterLink,
    LoginCarasoualComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SignupComponent {
  signupForm: FormGroup;
  showPassword1: boolean = false;
  showPassword2: boolean = false;
  value!: string;
  constructor(private router: Router, private fb: FormBuilder) {
    this.signupForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(5)]],
        mobile: [  '', [Validators.required, Validators.pattern('^[0-9]{10}$')], Validators.maxLength(10),],
        email: [ '', [  Validators.required,  Validators.pattern( '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$' ),],],
        password: [ '',[ Validators.required, Validators.minLength(8), Validators.pattern( '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$' ), ], ],
        confirmPassword: ['', Validators.required],
        termsCheck: [false, Validators.requiredTrue],
      },
      { validator: this.matchPasswords }
    );
  }

  matchPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  onMobileInput(event: any): void {
    const input = event.target;
    const value = input.value;
    if (value.length > 9) {
      input.blur();
    }
  }
  get fullName() {
    return this.signupForm.get('fullName');
  }
  get mobile() {
    return this.signupForm.get('mobile');
  }
  get email() {
    return this.signupForm.get('email');
  }
  togglePassword(fieldNumber: number) {
    if (fieldNumber === 1) {
      this.showPassword1 = !this.showPassword1;
    } else if (fieldNumber === 2) {
      this.showPassword2 = !this.showPassword2;
    }
  }





  onLogin(): void {
    {
      this.router.navigate(['/login']);
    }
  }
}
