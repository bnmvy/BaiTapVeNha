import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICustomer } from './icustomer';

describe('ICustomer', () => {
  let component: ICustomer;
  let fixture: ComponentFixture<ICustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ICustomer],
    }).compileComponents();

    fixture = TestBed.createComponent(ICustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
