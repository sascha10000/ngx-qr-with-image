import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQrWithImageComponent } from './ngx-qr-with-image.component';

describe('NgxQrWithImageComponent', () => {
  let component: NgxQrWithImageComponent;
  let fixture: ComponentFixture<NgxQrWithImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxQrWithImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxQrWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
