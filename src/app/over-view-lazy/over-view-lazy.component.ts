import { Component } from '@angular/core';
import { CollegesService } from '../colleges.service';

@Component({
  selector: 'app-over-view-lazy',
  templateUrl: './over-view-lazy.component.html',
  styleUrl: './over-view-lazy.component.scss'
})
export class OverViewLazyComponent {

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
  
}
