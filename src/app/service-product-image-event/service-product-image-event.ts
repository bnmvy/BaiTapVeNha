import { Component } from '@angular/core';
import { IProductImage, ProductService } from '../../services/product-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  styleUrl: './service-product-image-event.css',
  templateUrl: './service-product-image-event.html',
})
export class ServiceProductImageEvent {
  public products: IProductImage[] = [];

  constructor(
    private pservice: ProductService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.pservice.getProductsWithImages();
  }

  viewDetail(f: IProductImage): void {
    this.router.navigate(['/service-product-image-event', f.ProductId]);
  }
}
