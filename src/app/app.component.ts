import { Component } from '@angular/core';
import { NgxQrWithImageModule } from 'ngx-qr-with-image';
import { saveAs } from 'file-saver';

@Component({
  selector: 'ngx-lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-qr-with-image-library';
  data:Blob;

  receiveBlob(event){
    console.log(event);
    this.data = event;
  }

  save(){
    saveAs(this.data, "file.png");
  }

}
