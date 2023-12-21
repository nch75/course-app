import { Component, EventEmitter, Output } from '@angular/core';
import { CollegesService } from '../../colleges.service';

@Component({
  selector: 'app-overview-form',
  templateUrl: './overview-form.component.html',
  styleUrl: './overview-form.component.scss'
})
export class OverviewFormComponent {
 // universityList : any = [];
  @Output() tableDataEmitter = new EventEmitter();
constructor(private collegesService: CollegesService){

}
  getUniversityList(){
    this.collegesService.indLinks().subscribe(
      (respo)=>{
       // this.universityList = respo;
        this.tableDataEmitter.emit(respo);

      },
      ()=> {

      }
    )

  }
}
