import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartjourneyComponent } from './startjourney.component';

describe('StartjourneyComponent', () => {
  let component: StartjourneyComponent;
  let fixture: ComponentFixture<StartjourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartjourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartjourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
