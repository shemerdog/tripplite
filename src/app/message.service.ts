import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    messages: string[] = [];

    add(message: string): void {
        this._snackBar.open(message, "clear", { duration: 3000 });
        this.messages.push(message);
        // console.info(message);
    }

    clear(): void {
        this.messages.length = 0;
    }

    constructor(
        private _snackBar: MatSnackBar
    ) { }
}
