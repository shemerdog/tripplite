import { Component, OnInit } from '@angular/core';
import { Router, ActivationStart } from '@angular/router';

@Component({
    selector: 'app-page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.less']
})
export class PageTitleComponent implements OnInit {
    title: string;
    constructor(
        private router: Router,
    ) { }

    ngOnInit() {
        this.checkEvents();
    }

    checkEvents() {
        this.router.events.subscribe(event => {
            if (event instanceof ActivationStart) {
                console.log(event.snapshot);
                this.title = event.snapshot.url[0].path;
            }
        });
    }

}
