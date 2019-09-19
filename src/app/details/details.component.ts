import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { PrivilegesService } from '../privileges.service';
import { Privilege } from '../privileges/privilege';
import { UserService } from '../user.service';
import { User } from '../users/user';


@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.less']
})
export class DetailsComponent {
    privileges: Privilege[]
    @Input() user: User
    @Output() userChange = new EventEmitter<User>();

    detailsForm = this.fb.group({
        id: [null, Validators.required],
        name: [null, Validators.compose([Validators.maxLength(150), Validators.required])],
        description: [null, Validators.maxLength(150)],
        privileges: [null, Validators.required]
    });

    onSubmit() {
        this.userService.updateUser(this.detailsForm.value)
            .subscribe(_ => {
                this.userChange.emit(this.detailsForm.value);
            })
    }

    getPrivileges(): void {
        this.privilegeService.getPrivileges()
            .subscribe(privileges => this.privileges = privileges);
    }

    constructor(
        private privilegeService: PrivilegesService,
        private userService: UserService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.getPrivileges();
        this.detailsForm.setValue(this.user, { onlySelf: true });
    }
}
