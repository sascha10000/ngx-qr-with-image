import { NgModule } from '@angular/core';
import { NgxQrWithImageComponent } from './ngx-qr-with-image.component';
import { QRCodeModule } from 'angular2-qrcode';


@NgModule({
  declarations: [NgxQrWithImageComponent],
  imports: [
    QRCodeModule
  ],
  exports: [NgxQrWithImageComponent]
})
export class NgxQrWithImageModule { }
