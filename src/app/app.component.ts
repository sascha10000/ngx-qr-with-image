import { Component } from "@angular/core";
import { NgxQrWithImageModule } from "ngx-qr-with-image";
import { saveAs } from "file-saver";

@Component({
  selector: "ngx-lib-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ngx-qr-with-image-library";
  data: Blob;

  imgURL: string = "";
  imgHeight: number = 200;
  imgWidth: number = 200;
  qrSize: number = 200;
  textValue: string = "";

  constructor() {
    this.imgURL = "http://localhost:4200/assets/unnamed.png";
  }

  receiveBlob(event) {
    console.log(event);
    this.data = event;
  }

  save() {
    saveAs(this.data, "file.png");
  }
}
