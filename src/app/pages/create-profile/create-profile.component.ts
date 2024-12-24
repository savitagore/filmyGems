import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, NgZone, OnInit, Renderer2 } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

import { FooterComponent } from '../../shared/footer/footer.component';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProgressBar, ProgressBarModule } from 'primeng/progressbar';

import { StartjourneyComponent } from '../../shared/startjourney/startjourney.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    ReactiveFormsModule,
    FormsModule,
    StartjourneyComponent,
    FileUploadModule,
    ButtonModule,
    BadgeModule,
    ProgressBarModule,
    ToastModule,
    CalendarModule,
    ConfirmDialogModule,
    ButtonModule,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css',
})
export class CreateProfileComponent  {
  backgroundImageUrl: string = 'assets/create-profile/bg-main.png';
  bgImage: string = 'assets/create-profile/music-girl.png';

  profileForm: FormGroup;


  inputStates: { [key: string]: boolean } = {};

  onInputChange(event: any, fieldName: string): void {
    this.inputStates[fieldName] = !!event.target.value.trim();
  }
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    ) {
    this.profileForm = this.fb.group  ({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          ),
        ],
      ],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      country: ['', [Validators.required]],
    });
  }

  confirm1(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
          life: 1000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 1000,
        });
      },
    });
  }


}
