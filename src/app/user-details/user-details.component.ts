import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../users/user';
import { UserService } from '../user.service';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {

    @Input() user: User;
    userProps: string[];
    userPropsIcons = {
        id: 'label',
        name: 'person',
        privileges: 'lock',
        description: 'description'
    }

    getUser(): void {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.userService.getUser(id)
            .subscribe(user => {
                this.user = user;
                this.userProps = Object.getOwnPropertyNames(this.user);
            });
    }

    openDeleteDialog(): void {
        this.dialog.open(DeleteUserDialogComponent, {
            maxWidth: '350px',
            minWidth: '210px',
            data: this.user
        });
    }

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getUser();
    }

}
