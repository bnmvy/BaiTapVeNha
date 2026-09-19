import { Injectable } from '@angular/core';

export interface IProductImage {
  ProductId: string;
  ProductName: string;
  Price: number;
  Image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsImage: IProductImage[] = [
    { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "https://th.bing.com/th/id/OIP.oBZm2CeRaySAn9zOACc8rAHaHa?w=187&h=188&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" },
    { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "https://th.bing.com/th/id/OIP.EhdNFPUTtqscyIIN8zwEVAHaLH?w=132&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" },
    { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "https://th.bing.com/th/id/OIP.xu9uuHqlyHfw2tkUydTZ4QHaG-?w=174&h=182&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" }
  ];

  constructor() { }

  getProductsWithImages(): IProductImage[] {
    return this.productsImage;
  }

  getProductDetail(id: string): IProductImage | undefined {
    return this.productsImage.find(x => x.ProductId === id);
  }
}