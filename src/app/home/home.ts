import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { QrCode } from '../qr-code/qr-code';

@Component({
  selector: 'app-home',
  imports: [RouterLink,QrCode],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {






}
