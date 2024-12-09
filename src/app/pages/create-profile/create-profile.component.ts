import { CommonModule } from '@angular/common';
import { Component, Input, NgZone, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

import { FooterComponent } from '../../shared/footer/footer.component';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProgressBar, ProgressBarModule } from 'primeng/progressbar';

import { StartjourneyComponent } from '../../shared/startjourney/startjourney.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent, ReactiveFormsModule, FormsModule, StartjourneyComponent,
    FileUploadModule, ButtonModule, BadgeModule, ProgressBarModule, ToastModule,CalendarModule],
  providers: [MessageService],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css'
})
export class CreateProfileComponent  {
  backgroundImageUrl: string = 'assets/create-profile/bg-main.png';
  bgImage: string = 'assets/create-profile/music-girl.png';

  profileForm: FormGroup;

  constructor(private fb: FormBuilder,private messageService: MessageService, private ngZone: NgZone) {

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







