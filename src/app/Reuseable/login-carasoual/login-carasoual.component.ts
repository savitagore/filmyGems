import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-login-carasoual',
  standalone: true,
  imports: [],
  templateUrl: './login-carasoual.component.html',
  styleUrl: './login-carasoual.component.css'
})
export class LoginCarasoualComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Declare the bootstrap variable
    const carouselElement = document.querySelector('#carouselExample');
    const carousel = (window as any).bootstrap.Carousel(carouselElement, {
      interval: 1000, // Slide every 1 second
      ride: 'carousel'
    });
  }
}
