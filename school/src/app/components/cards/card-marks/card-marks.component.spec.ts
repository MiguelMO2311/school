import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMarksComponent } from './card-marks.component';

describe('CardMarksComponent', () => {
  let component: CardMarksComponent;
  let fixture: ComponentFixture<CardMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMarksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
