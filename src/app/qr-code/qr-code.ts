import { Component } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
@Component({
  selector: 'app-qr-code',
  imports: [QRCodeComponent],
  templateUrl: './qr-code.html',
  styleUrl: './qr-code.scss',
})
export class QrCode {}
