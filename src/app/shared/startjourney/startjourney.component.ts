import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-startjourney',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './startjourney.component.html',
  styleUrl: './startjourney.component.css'
})
export class StartjourneyComponent {
  backgroungImage:string='assets/music/group.png';
  
}
