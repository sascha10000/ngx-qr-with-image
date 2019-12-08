import { Component, AfterViewInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'qr-img',
  templateUrl: 'ngx-qr-with-image.component.html',
  styles: []
})
export class NgxQrWithImageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if(this._imgSrc != undefined){
      this.addImage(this._imgSrc);
    }
  }

  private _imgSrc:string;
  private _content:string;

  title = 'qr-code-test';
  @Input("img-height") imgHeihgt:number = 100;
  @Input("img-width") imgWidth:number = 100;
  @Input("show") show:boolean = true;
  @Input("size") qrCodeSize:number = 500;
  @Output("change") qrCodeEmitter: EventEmitter<Blob> = new EventEmitter();
  @ViewChild('qrElem', {static : false}) qrCode:any;

  @Input("img") 
  set imgSrc(val:string){
    this._imgSrc = val;
    this.addImage(this._imgSrc);
  }
  get imgSrc(){
    return this._imgSrc;
  }

  @Input("content") 
  set content(val:string){
    this._content = val;
    setTimeout(() => { 
      this.addImage(this._imgSrc);
     }, 500);
  }
  get content(){
    return this._content;
  }

  saveQRImage(){
    let elem =  this.qrCode.elementRef.nativeElement.children[0];
    saveAs(this.canvasToBlob(elem), "file.png");
  }

  addImage(url:string){
    // get canvas dom element
    let elem =  this.qrCode.elementRef.nativeElement.children[0];
    // convert to canvas type
    let context = elem.getContext("2d");

    // create image
    let img = new Image();

    // fixed sizes
    let iWidth = this.imgWidth;
    let iHeight = this.imgWidth;

    let _that = this; 
    img.onload = () => {
      context.drawImage(img, (elem.width/2) - (iWidth/2),(elem.height/2) - (iHeight/2), iWidth, iHeight);
      this.qrCodeEmitter.emit(this.canvasToBlob(this.qrCode.elementRef.nativeElement.children[0]));
    }

    img.src = url;
  }

  // adapted from: https://medium.com/better-programming/convert-a-base64-url-to-image-file-in-angular-4-5796a19fdc21
  canvasToBlob(canvas){
    let dataurl = canvas.toDataURL("image/png");
    let byteString = window.atob(dataurl.replace(/^data:image\/(png|jpg);base64,/, ""));
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([int8Array], { type: 'image/jpeg' });
  }

}
