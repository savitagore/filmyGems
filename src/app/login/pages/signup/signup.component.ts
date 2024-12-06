import { TooltipModule } from 'primeng/tooltip';

import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { SignupvalidationService } from '../../../core/Services/signupValidation/signupvalidation.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NotificationServiceService } from '../../../core/Services/Notification/notification-service.service'

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
  ],
  providers:[SignupvalidationService,NotificationServiceService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SignupComponent {
  signupForm: FormGroup;
  savedData: any[] = [];
  showPassword1: boolean = false;
  showPassword2: boolean = false;

  constructor(private router: Router, private fb: FormBuilder,private signupService:SignupvalidationService,private notificationService: NotificationServiceService) {
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
  passwordMatchValidator(control: FormGroup): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password?.value !== confirmPassword?.value) {
      return { passwordsMismatch: true };
    }
    return null;
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


  get fullName() {
    return this.signupForm.get('fullName');
  }
  get mobile() {
    return this.signupForm.get('mobile');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  getFullNameErrorMessage(): string {
    return this.signupService.getFullNameErrorMessage(this.fullName as AbstractControl);
  }
  getMobileTooltipMessage(): string {
    return this.signupService.getMobileErrorMessage(this.mobile as AbstractControl);
  }
  getEmailTooltipMessage(): string {
    return this.signupService.getEmailErrorMessage(this.email as AbstractControl);
  }
  getPasswordPatternTooltip(): string {
    return this.signupService.getPasswordPatternErrorMessage();
  }
  getPasswordMismatchTooltip(): string {
    return this.signupService.getPasswordMismatchErrorMessage();
  }
  togglePassword(fieldNumber: number) {
    if (fieldNumber === 1) {
      this.showPassword1 = !this.showPassword1;
    } else if (fieldNumber === 2) {
      this.showPassword2 = !this.showPassword2;
    }
  }

  // onLogin(): void {
  //   {
  //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });

  //     this.router.navigate(['/login']);
  //   }
  // }
  onLogin(): void {
    if (this.signupForm.valid) {
      this.savedData.push(this.signupForm.value);
      // this.messageService.add({
      //   severity: 'success',
      //   summary: 'Success',
      //   detail: 'Data saved successfully!',
      // });
      this.notificationService.showSuccess('Success', 'Data saved successfully!');

      this.router.navigate(['/login']);
    } else {
      //   this.messageService.add({
      //   severity: 'warn',
      //   summary: 'Validation Error',
      //   detail: 'Please fill out the form correctly.',
      // });
      this.notificationService.showWarning('Validation Error', 'Please fill out the form correctly.');

    }

  }
}
