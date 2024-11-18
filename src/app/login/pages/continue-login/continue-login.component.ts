import { Component } from '@angular/core';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-continue-login',
  standalone: true,
  imports: [LoginCarasoualComponent,RouterLink],
  templateUrl: './continue-login.component.html',
  styleUrl: './continue-login.component.css'
})
export class ContinueLoginComponent {

}
