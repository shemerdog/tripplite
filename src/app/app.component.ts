import { Component } from '@angular/core';

import { MessageService } from './message.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'Full Stack Project';

    constructor(
        private messageService: MessageService,
    ) { }

    ngOnInit() {
        this.messageService.add("Application Loaded");
    }
}
