import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mat-tabs',
  templateUrl: './mat-tabs.component.html',
  styleUrls: ['./mat-tabs.component.css']
})
export class MatTabsComponent {

  displayedColumns: string[] = ['id', 'name'];

  dataSource = new MatTableDataSource([
    { id: 1, name: 'Thoma' },
    { id: 2, name: 'Alex' }
  ]);

}
