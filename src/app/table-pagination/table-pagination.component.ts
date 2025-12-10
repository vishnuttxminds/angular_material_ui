import { AfterViewInit, Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements AfterViewInit {
displayedColumns: string[] = ['id', 'firstName', 'email'];
  users: any[] = [];
  totalUsers = 0;

  pageSize = 5;
  pageIndex = 0;

  constructor(private apiService: ApiServiceService) {}

  ngAfterViewInit() {
    this.loadUsers();
  }

  loadUsers() {
    const skip = this.pageIndex * this.pageSize;

    this.apiService.getUsers(this.pageSize, skip).subscribe((res: any) => {
      this.users = res.users;
      this.totalUsers = res.total;
    });
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadUsers();
  }
}