import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-startjourney',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './startjourney.component.html',
  styleUrl: './startjourney.component.css'
})
export class StartjourneyComponent {
  // backgroungImage:string='assets/music/group.png';
  @Input() bgImage: string = 'assets/landing_Img/girls-imgs.png';
}
