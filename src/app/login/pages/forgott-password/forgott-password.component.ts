import { Component } from '@angular/core';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupvalidationService } from '../../../core/Services/signupValidation/signupvalidation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgott-password',
  standalone: true,
  imports: [LoginCarasoualComponent,RouterLink,ReactiveFormsModule,CommonModule],
  providers:[SignupvalidationService],
  templateUrl: './forgott-password.component.html',
  styleUrl: './forgott-password.component.css'
})
export class ForgottPasswordComponent {
  passwordsForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder,private signupService:SignupvalidationService) {
    this.passwordsForm = this.fb.group(
      {
        email: [ '', [  Validators.required,  Validators.pattern( '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$' ),],],
      },
    );
  }
  get email() {
    return this.passwordsForm.get('email');
  }
  getEmailTooltipMessage(): string {
    return this.signupService.getEmailErrorMessage(this.email as AbstractControl);
  }
}
