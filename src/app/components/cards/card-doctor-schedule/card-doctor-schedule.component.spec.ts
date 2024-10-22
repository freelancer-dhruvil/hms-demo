import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDoctorScheduleComponent } from './card-doctor-schedule.component';

describe('CardDoctorScheduleComponent', () => {
  let component: CardDoctorScheduleComponent;
  let fixture: ComponentFixture<CardDoctorScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDoctorScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDoctorScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
