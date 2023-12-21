import { Component } from '@angular/core';
import { CollegesService } from '../colleges.service';

@Component({
  selector: 'app-kids',
  templateUrl: './Kids.component.html',
  styleUrl: './Kids.component.scss'
})
export class KidsComponent {
  constructor(private collegesService: CollegesService){

  }
  
  indianRecords : any = [];

  getIndUniv() {
    console.log("India works!")
    this.collegesService.indLinks().subscribe(
      (resp3)=>{
        console.log(resp3);
        this.indianRecords=resp3;
      },
      ()=>{

      }
    )

  };
}
