import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayApplicationComponent } from './create-pay-application.component';

describe('CreatePayApplicationComponent', () => {
  let component: CreatePayApplicationComponent;
  let fixture: ComponentFixture<CreatePayApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePayApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePayApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
