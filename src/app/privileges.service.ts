import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Privilege } from './privileges/privilege';
import { PRIVILEGES } from './privileges/mock-privileges';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PrivilegesService {

    constructor(
        private httpClient: HttpClient,
        private messageService: MessageService
    ) { }

    private privilegesUrl = 'http://localhost:3000/api/privileges';

    private log(message: string) {
        this.messageService.add(`PrivilegeService: ${message}`);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }

    getPrivileges(): Observable<Privilege[]> {
        return this.httpClient.get<Privilege[]>(this.privilegesUrl)
            .pipe(
                // map(res => {
                //     return res.map( user => {
                //         user.privileges = user.privileges.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/,/g, ', ');
                //         return user;
                //     });
                // }),
                tap( () => this.log("Privileges Fetched!")),
                catchError(this.handleError<Privilege[]>('getPrivileges', []))
            );
    }
}