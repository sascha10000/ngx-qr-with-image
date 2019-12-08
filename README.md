# NgxQrWithImage

Install the package with the following commands.

```bash
npm install ngx-qr-with-image angular2-qrcode
```

Include in Module:

```typescript
import { NgxQrWithImageModule } from 'ngx-qr-with-image';
...
  imports: [
    ...
    NgxQrWithImageModule
  ]
...
```

Usage:

```html
<qr-img img="yourImage.png" content="content_shown_by_qr_code" 
        size="200"
        img-width="30"
        img-height="30"
        (change)="someFunction($event)
>
</qr-img>
```

size, img-width, img-height are not mandatory

Example for "someFunction":

