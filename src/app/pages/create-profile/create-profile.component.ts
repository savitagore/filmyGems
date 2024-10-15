import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent, MatFormFieldModule,
    MatInputModule,  ReactiveFormsModule,
    MatButtonModule,],
    providers:[],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css'
})
export class CreateProfileComponent {
  backgroundImageUrl: string = 'assets/create-profile/bg-main.png';

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
