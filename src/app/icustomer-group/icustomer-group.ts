import { ICustomer } from '../icustomer/icustomer';

export interface ICustomerGroup {
  CustomerTypeId: number;
  CustomterTypeName: string;
  Customers: Array<ICustomer>;
}