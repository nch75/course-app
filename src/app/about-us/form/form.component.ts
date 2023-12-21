import { Component } from '@angular/core';
import { CollegesService } from '../../colleges.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  universityList : any = []
 
  constructor (private collegesService: CollegesService) {

  }

  getUniversityList(){
    console.log('universityList works');
    this.collegesService.indLinks().subscribe(
      (resp)=> {
        this.universityList= resp;

      },
      ()=>{

      }
    )
    
  }
}
