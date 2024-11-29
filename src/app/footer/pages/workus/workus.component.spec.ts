import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkusComponent } from './workus.component';

describe('WorkusComponent', () => {
  let component: WorkusComponent;
  let fixture: ComponentFixture<WorkusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
