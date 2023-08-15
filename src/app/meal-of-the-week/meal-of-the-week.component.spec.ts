import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealOfTheWeekComponent } from './meal-of-the-week.component';

describe('MealOfTheWeekComponent', () => {
  let component: MealOfTheWeekComponent;
  let fixture: ComponentFixture<MealOfTheWeekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MealOfTheWeekComponent]
    });
    fixture = TestBed.createComponent(MealOfTheWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
