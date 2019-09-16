import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
    { path: 'home', component: UsersComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'privileges', component: PrivilegesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
