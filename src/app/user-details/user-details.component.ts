import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../users/user';
import { UserService } from '../user.service';


@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {

    @Input() user: User;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService
    ) { }

    getUser(): void {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.userService.getUser(id)
        .subscribe( user => this.user = user );
    }

    ngOnInit() {
        this.getUser();
    }

}
