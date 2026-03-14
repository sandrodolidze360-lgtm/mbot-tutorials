import { Component, Input } from '@angular/core';

export interface SchoolItems {
    pen:string,
    lessonQty:number,
    jkokko:number

}

@Component({
  selector: 'app-view-details',
  imports: [],
  templateUrl: './view-details.html',
  styleUrl: './view-details.scss',
})
export class ViewDetails {


  @Input() id!: string;


  pencilcase:string="pencil"
  pencilQty:number=7

  object:SchoolItems= {
    pen:'pen',
    lessonQty:10,
    jkokko:12
  }













  constructor() {

    

  }

}
