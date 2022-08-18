import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankleaveComponent } from './bankleave.component';

describe('BankleaveComponent', () => {
  let component: BankleaveComponent;
  let fixture: ComponentFixture<BankleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
