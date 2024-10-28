import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentshowComponent } from './talentshow.component';

describe('TalentshowComponent', () => {
  let component: TalentshowComponent;
  let fixture: ComponentFixture<TalentshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentshowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
