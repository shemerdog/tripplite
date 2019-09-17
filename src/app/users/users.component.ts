import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

import { User } from './user';
import { UserService } from '../user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.less']
})

export class UsersComponent implements OnInit {
    title = "Users";
    users: MatTableDataSource<User>;
    displayedColumns: string[] = ['id', 'name', 'privileges', 'description'];

    @ViewChild(MatSort, { static: false })
    sort: MatSort;

    constructor(private userService: UserService) { }

    ngOnInit() {
        // this.users.sort = this.sort;
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getUsers()
            .subscribe(users => {
                this.users = new MatTableDataSource(users);
                this.users.sort = this.sort;
            });
    }


}
