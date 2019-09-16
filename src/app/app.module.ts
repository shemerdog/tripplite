import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MessagesComponent } from './messages/messages.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserDetailsComponent,
        MessagesComponent,
        PrivilegesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
