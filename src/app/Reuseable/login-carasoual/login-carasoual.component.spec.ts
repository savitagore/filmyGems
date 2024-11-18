import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCarasoualComponent } from './login-carasoual.component';

describe('LoginCarasoualComponent', () => {
  let component: LoginCarasoualComponent;
  let fixture: ComponentFixture<LoginCarasoualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCarasoualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCarasoualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
