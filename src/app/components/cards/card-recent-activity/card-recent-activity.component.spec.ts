import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecentActivityComponent } from './card-recent-activity.component';

describe('CardRecentActivityComponent', () => {
  let component: CardRecentActivityComponent;
  let fixture: ComponentFixture<CardRecentActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRecentActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardRecentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
