import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

import { FooterComponent } from '../../shared/footer/footer.component';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { StartjourneyComponent } from '../../shared/startjourney/startjourney.component';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent, ReactiveFormsModule, FormsModule, StartjourneyComponent],
  providers:[],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css'
})
export class CreateProfileComponent {
  backgroundImageUrl: string = 'assets/create-profile/bg-main.png';
  bgImage: string = 'assets/create-profile/music-girls.png';

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      country: ['', [Validators.required]]
    });
  }

}
