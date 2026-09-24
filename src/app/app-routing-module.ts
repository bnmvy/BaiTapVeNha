import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { CatalogComponent } from './catalog/catalog';
import { GroupCustomersComponent } from './group-customers/group-customers';

const routes: Routes = [
  { path: 'service-product-image-event', component: ServiceProductImageEvent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetail },
  { path: 'catalog', component: CatalogComponent },
  { path: '', redirectTo: 'group-customers', pathMatch: 'full' },
  { path: 'group-customers', component: GroupCustomersComponent } // Nhớ kiểm tra đầy đủ dấu phẩy ở các dòng trước dòng này
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }