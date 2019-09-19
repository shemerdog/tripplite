import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DeleteUserDialogComponent } from './delete-user-dialog/delete-user-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserDetailsComponent,
        PrivilegesComponent,
        NavTabsComponent,
        PageTitleComponent,
        NavBarComponent,
        HomeComponent,
        DetailsComponent,
        DeleteUserDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [DeleteUserDialogComponent]
})
export class AppModule { }
