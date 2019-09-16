import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Privilege } from './privileges/privilege';
import { PRIVILEGES } from './privileges/mock-privileges';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class PrivilegesService {

    constructor(private messageService: MessageService) { }

    getPrivileges(): Observable<Privilege[]> {
        this.messageService.add("PrivilegeService: Privileges Fetched!");
        return of(PRIVILEGES);
    }
}