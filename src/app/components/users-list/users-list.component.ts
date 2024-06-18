import { Component, EventEmitter, Output, Input } from '@angular/core';
import { IUser } from '../../interfaces/User/User.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  
  @Input({ required: true })
  users: IUser[] = [];

  @Output('userSelected') UserSelectedEmitt = new EventEmitter<IUser>(); 
  onUserSelected(user: IUser){
    this.UserSelectedEmitt.emit(user);
  }
}
