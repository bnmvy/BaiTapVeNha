import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { Homework } from './homework/homework';
import { CatalogComponent } from './catalog/catalog';
import { GroupCustomersComponent } from './group-customers/group-customers';

@NgModule({
  declarations: [
    App,
    ServiceProductImageEvent,
    ServiceProductImageEventDetail,
    Homework,
    CatalogComponent
    // Đã xóa GroupCustomersComponent khỏi declarations
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    // HttpClientModule,
    GroupCustomersComponent // Đã chuyển GroupCustomersComponent vào imports vì là Standalone Component
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}