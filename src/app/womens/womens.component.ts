import { Component } from '@angular/core';
import { CollegesService } from '../colleges.service';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrl: './womens.component.scss'
})
export class WomensComponent {
constructor(private collegesService: CollegesService){

}

ukRecords : any = [];

  getUkUniv() {
  console.log("uk works!")
  this.collegesService.ukLinks().subscribe(
    (resp2) => {
      console.log(resp2)
      this.ukRecords = resp2;
    },
    ( ) => {

    }

  )


}
}
