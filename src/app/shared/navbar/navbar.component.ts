import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isEditMode = false;
  profileForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: ['Ajay Kumar'],
      subscriptionPlan: ['Platinum (₹1999)'],
      location: ['Navi Mumbai'],
      contactNumber: ['9800000000'],
      bio: [
     'I am Passionate and dedicated, brings complex characters to life on stage and screen. With a rich background in dramatic arts and a talent for evoking deep emotions, I’m captivates audiences, leaving a lasting impact. An artist committed to storytelling,  and continue to push the boundaries of performance.'
      ]
    });
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  onSubmit() {
    if (this.profileForm.valid) {

      this.toggleEditMode();
    }
  }




}
