import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User } from '../users/user';
import { MessageService } from '../message.service';
import { UserService } from '../user.service';


@Component({
    selector: 'app-delete-user-dialog',
    templateUrl: './delete-user-dialog.component.html',
    styleUrls: ['./delete-user-dialog.component.less']
})
export class DeleteUserDialogComponent implements OnInit {

    inProgress: boolean

    constructor(
        private messageService: MessageService,
        private userService: UserService,
        private location: Location,
        public dialogRef: MatDialogRef<DeleteUserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: User,
        ) { }

    close(): void {
        this.dialogRef.close();
    }

    deleteUser(): void {
        this.messageService.add(`Deleting user by id: ${this.data.id}`);
        this.inProgress = true;
        this.userService.deleteUser(this.data.id)
            .subscribe(_ => {
                this.location.back();
                this.dialogRef.close();
            });
        
    }

    ngOnInit() {
    }

}
