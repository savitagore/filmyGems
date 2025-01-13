import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Reuseable/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../Reuseable/footer/footer.component';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FooterComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit{
  backgroundImageUrl: string = 'assets/contactUs/cantactUS-bg.png';

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }


  get formControls() {
    return this.contactForm.controls as {
      firstName: any,
      lastName: any,
      email: any,
      phone: any,
      subject: any,
      message: any
    };
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  onPhoneInput(event: any): void {
    const inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
  }
}
