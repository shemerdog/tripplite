import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
    links = [
        { route: '/home', headline: 'Home' },
        { route: '/users', headline: 'Users' },
        { route: '/privileges', headline: 'Privileges' },
        { route: '/tabs', headline: 'Tabbed Design' },
    ]

    constructor() { }

    ngOnInit() {
    }

}
