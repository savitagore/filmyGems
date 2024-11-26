import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,RouterLink,LoginCarasoualComponent,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  constructor( private router: Router,private fb: FormBuilder) {
    this.signupForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(5)]],
        mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        email: [ '', [ Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$') ]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        termsCheck: [false, Validators.requiredTrue],
      }
    );
  }
  showPassword1: boolean = false;
  showPassword2: boolean = false;

  togglePassword(fieldNumber: number) {
    if (fieldNumber === 1) {
      this.showPassword1 = !this.showPassword1;
    } else if (fieldNumber === 2) {
      this.showPassword2 = !this.showPassword2;
    }
  }
  get fullName() {
    return this.signupForm.get('fullName');
  }
onMobileInput(event: any): void {
  const input = event.target;
  const value = input.value;
  if (value.length > 10) {
    input.blur();
    }
  }
get mobile() {
  return this.signupForm.get('mobile');
}
get email() {
  return this.signupForm.get('email');
  }
  onLogin(): void {
    {
     this.router.navigate(['/login']);

     }
   }
 }

