import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-rating-table',
  templateUrl: './rating-table.component.html',
  styleUrls: ['./rating-table.component.css']
})
export class RatingTableComponent implements OnInit {
  users;
  displayedColumns: string[] = ['position', 'nickname', 'country', 'points'];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getItems().subscribe(users => (
      this.users = users,
      console.log(this.users)
    ))
  }

}
