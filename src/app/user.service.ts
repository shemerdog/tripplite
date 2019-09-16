import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


import { User } from './users/user';
import { USERS } from './users/mock-users';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

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
            tap(_ => this.log(`fetching user: ${id}`)),
            catchError( this.handleError<User>(`getUser id=${id}`) )
        );
    }
    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.usersUrl)
            .pipe(
                tap(_ => this.log("Users Fetched!")),
                catchError( this.handleError<User[]>('getUsers', []) )
            );
    }
}