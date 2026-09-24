import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICustomerGroup } from './icustomer-group';

describe('ICustomerGroup', () => {
  let component: ICustomerGroup;
  let fixture: ComponentFixture<ICustomerGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ICustomerGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(ICustomerGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
