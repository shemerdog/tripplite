import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'privileges', component: PrivilegesComponent },
    { path: 'tabs', component: NavTabsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
