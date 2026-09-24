import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Import CommonModule
import { CustomerHttpService } from '../customer-http/customer-http';
import { ICustomerGroup } from '../icustomer-group/icustomer-group';

@Component({
  selector: 'app-group-customers',
  standalone: true, // Nếu có
  imports: [CommonModule], // 2. Bắt buộc thêm CommonModule vào đây để dùng *ngFor
  templateUrl: './group-customers.html',
  styleUrls: ['./group-customers.css']
})
export class GroupCustomersComponent implements OnInit {
  public customerGroups: ICustomerGroup[] = [];
  public errMessage: string = '';

  constructor(private _customerService: CustomerHttpService) { }

  ngOnInit(): void {
    this._customerService.getCustomerGroups().subscribe({
      next: (data: ICustomerGroup[]) => {
        console.log('Dữ liệu nhận được:', data); // Bật Console lên xem đã có dữ liệu chưa
        this.customerGroups = data;
      },
      error: (err: any) => {
        console.error('Lỗi gọi dữ liệu:', err);
        this.errMessage = err;
      }
    });
  }
}