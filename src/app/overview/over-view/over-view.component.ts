import { Component } from '@angular/core';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrl: './over-view.component.scss'
})
export class OverViewComponent {

  univList: any = [];


  tableDataEmitter(event: any) {
    console.log(event);
    this.univList = event;
  }

}
