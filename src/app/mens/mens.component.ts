import { Component } from '@angular/core';
import { CollegesService } from '../colleges.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrl: './mens.component.scss'
})
export class MensComponent {

  universityRecords: any = [];

  constructor(private collegesService: CollegesService) {

  }

  getUsaUniv() {
    //console.log("usa works!");
    this.collegesService.usLinks().subscribe(
      (resp1) => {
        console.log(resp1)
        this.universityRecords = resp1;
      },
      () => {

      }

    )

  };


};



