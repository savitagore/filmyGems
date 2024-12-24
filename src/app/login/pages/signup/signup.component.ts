import { TooltipModule } from 'primeng/tooltip';

import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { SignupvalidationService } from '../../../core/Services/signupValidation/signupvalidation.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NotificationServiceService } from '../../../core/Services/Notification/notification-service.service';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    RouterLink,
    LoginCarasoualComponent,
    ReactiveFormsModule,
    TooltipModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [SignupvalidationService, NotificationServiceService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SignupComponent {
  signupForm: FormGroup;
  showPassword1: boolean = false;
  showPassword2: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private signupService: SignupvalidationService,
    private notificationService: NotificationServiceService,
    private http:HttpClient
  ) {
    this.signupForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(5)]],
        mobile: [
          '',
          [Validators.required, Validators.pattern('^[0-9]{10}$')],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
        termsCheck: [],
      },
      { validator: this.matchPasswords }
    );
  }
  matchPasswords(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }
  passwordMatchValidator(
    control: FormGroup
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password?.value !== confirmPassword?.value) {
      return { passwordsMismatch: true };
    }
    return null;
  }



  onMobileInput(event: any): void {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
    this.signupForm.get('mobile')?.setValue(input.value);
  }

  getFullNameErrorMessage(): string {
    const control = this.signupForm.get('fullName');
    return control ? this.signupService.getFullNameErrorMessage(control) : '';
  }

  getMobileTooltipMessage(): string {
    const control = this.signupForm.get('mobile');
    return control ? this.signupService.getMobileErrorMessage(control) : '';
  }

  getEmailTooltipMessage(): string {
    const control = this.signupForm.get('email');
    return control ? this.signupService.getEmailErrorMessage(control) : '';
  }

  getPasswordPatternTooltip(): string {
    return this.signupService.getPasswordPatternErrorMessage();
  }

  getPasswordMismatchTooltip(): string {
    const control = this.signupForm.get('confirmPassword');
    return control ? this.signupService.getPasswordMismatchErrorMessage() : '';
  }

  togglePassword(fieldNumber: number) {
    if (fieldNumber === 1) {
      this.showPassword1 = !this.showPassword1;
    } else if (fieldNumber === 2) {
      this.showPassword2 = !this.showPassword2;
    }
  }

  // onLogin(): void {
  //   if (this.signupForm.valid) {
  //     console.log('Form Data:', this.signupForm.value);
  //     this.router.navigate(['/login']);
  //   } else {
  //     console.error('Form is invalid. Check errors below:');

  //   }
  // }
  onLogin(): void {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      this.http.post('https://localhost:7197/api/Filmygems/CreateUser', formData).subscribe({
        next: (response) => {
          alert("User created successfully");
          console.log('User created successfully:', response);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error creating user:', error);
        }
      });
    } else {
      console.error('Form is invalid. Check errors below:');
    }
  }

}

