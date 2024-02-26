import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPayApplicationComponent } from './display-pay-application.component';

describe('DisplayPayApplicationComponent', () => {
  let component: DisplayPayApplicationComponent;
  let fixture: ComponentFixture<DisplayPayApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPayApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayPayApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
