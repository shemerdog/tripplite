import { Component, OnInit } from '@angular/core';

import { Privilege } from './privilege';
import { PrivilegesService } from '../privileges.service';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.less']
})
export class PrivilegesComponent implements OnInit {

  constructor( private privilegeService: PrivilegesService ) { }

  privileges: Privilege[];
  selectedPrivilege: Privilege;

  onSelect(privilege: Privilege): void {
      this.selectedPrivilege = privilege;
  }

  getPrivileges(): void {
    this.privilegeService.getPrivileges()
        .subscribe( privileges => this.privileges = privileges );
  }

  ngOnInit() {
      this.getPrivileges();
  }

}