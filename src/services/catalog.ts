import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  datas = [
    {
      "Cateid": "cate1", "CateName": "Nước Ngọt",
      "Products": [
        { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "https://th.bing.com/th/id/OIP.EhdNFPUTtqscyIIN8zwEVAHaLH?w=132&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" },
        { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "https://th.bing.com/th/id/OIP.xu9uuHqlyHfw2tkUydTZ4QHaG-?w=174&h=182&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" },
        { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "https://th.bing.com/th/id/OIP.oBZm2CeRaySAn9zOACc8rAHaHa?w=187&h=188&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" }
      ]
    },
    {
      "Cateid": "cate2", "CateName": "Bia",
      "Products": [
        { "ProductId": "p4", "ProductName": "Heleiken", "Price": 500, "Image": "https://th.bing.com/th/id/OIP.u43n2gzJCuU12vqMKvpLkwHaLG?w=132&h=194&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" },
        { "ProductId": "p5", "ProductName": "333", "Price": 400, "Image": "https://th.bing.com/th/id/OIP.TW4XSPL8so94sKbGDtXAMgHaHa?w=189&h=189&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" },
        { "ProductId": "p6", "ProductName": "Sai Gon", "Price": 600, "Image": "https://th.bing.com/th/id/OIP.gdmIuM48GNClP4jldarfSAHaFj?w=221&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" }
      ]
    }
  ];

  constructor() { }

  getCategories() {
    return this.datas;
  }
}