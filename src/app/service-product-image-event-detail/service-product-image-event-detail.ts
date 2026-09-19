import { Component } from '@angular/core';
import { IProductImage, ProductService } from '../../services/product-services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: false,
  styleUrl: './service-product-image-event-detail.css',
  templateUrl: './service-product-image-event-detail.html',
})
export class ServiceProductImageEventDetail {
  selectedProduct: IProductImage | undefined;

  constructor(
    private activateRoute: ActivatedRoute, 
    private _fs: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(param => {
      let id = param.get('id');
      if (id != null) {
        this.selectedProduct = this._fs.getProductDetail(id);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/service-product-image-event']);
  }
}
