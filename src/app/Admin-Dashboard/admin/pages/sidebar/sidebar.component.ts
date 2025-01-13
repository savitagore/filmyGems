import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule,ButtonModule,IconFieldModule,InputIconModule,RouterLink,DropdownModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
