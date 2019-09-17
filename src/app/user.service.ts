import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


import { User } from './users/user';
// import { USERS } from './users/mock-users';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    privilegesDisplayNames = {
        ViewData: "View Data",
        // [ "ViewUsers", ],
        // [ "ManageUsers", ],
        // [ "ViewRoles", ],
        // [ "ManageRoles", ],
        // [ "ConfigureSystem", ],
        // [ "ViewConfigureSystem", ],
    }
    constructor(
        private httpClient: HttpClient,
        private messageService: MessageService
    ) { }

    private usersUrl = 'http://localhost:3000/api/users';

    private log(message: string) {
        this.messageService.add(`UserService: ${message}`);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }
    getUser(id: number): Observable<User> {
        const url = `${this.usersUrl}/1/${id}`;
        // const url = `${this.usersUrl}/0/${id}`;
        return this.httpClient.get<User>(url)
            .pipe(
                tap( () => this.log(`fetching user: ${id}`)),
                catchError(this.handleError<User>(`getUser id=${id}`))
            );
    }
    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.usersUrl)
            .pipe(
                map(res => {
                    return res.map( user => {
                        user.privileges = user.privileges.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/,/g, ', ');
                        return user;
                    });
                }),
                tap( () => this.log("Users Fetched!")),
                catchError(this.handleError<User[]>('getUsers', []))
            );
    }
}