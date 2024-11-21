import { AfterViewInit, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-talentshow',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FooterComponent,TooltipModule],
  templateUrl: './talentshow.component.html',
  styleUrl: './talentshow.component.css'
})
export class TalentshowComponent {
  // fullText: string = "A Useful Guide On How To Avoid Coding Audits...";
  // truncatedText: string = this.fullText.slice(0, 20);
  blogs = [
    {
      image: 'assets/blogs/img-1.png',
      text: 'A Useful Guide On How To Avoid Coding Audits...'
    },
    {
      image: 'assets/blogs/img-2.png',
      text: 'Top Tips for Writing Clean Code in JavaScript'
    },
    {
      image: 'assets/blogs/img-3.png',
      text: 'Understanding Angular Dependency Injection'
    }
  ];

  truncateText(text: string, maxLength: number): string {
    return text.length > maxLength ? text.slice(0, 20) : text;
  }

}

