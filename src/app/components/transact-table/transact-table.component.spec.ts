import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactTableComponent } from './transact-table.component';

describe('TransactTableComponent', () => {
  let component: TransactTableComponent;
  let fixture: ComponentFixture<TransactTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
