import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/User/User.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUsers } from './utils/filter-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  users: IUser[] = [];
  usersFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  
  ngOnInit(): void {
    setTimeout(() => {
      this.users = UsersList;
      this.usersFiltered = this.users;
    }, 3000)
  }
  
  onUserSelected(user: IUser){
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions){
    this.usersFiltered = filterUsers(filterOptions, this.users);
  }
}

