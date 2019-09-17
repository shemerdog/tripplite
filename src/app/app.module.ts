import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MessagesComponent } from './messages/messages.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserDetailsComponent,
        MessagesComponent,
        PrivilegesComponent,
        NavTabsComponent,
        PageTitleComponent,
        NavBarComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
