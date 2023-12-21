import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrl: './overview-table.component.scss'
})
export class OverviewTableComponent {

  @Input() incomingTableData: any = [];
}
