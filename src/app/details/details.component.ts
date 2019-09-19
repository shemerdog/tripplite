import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PrivilegesService } from '../privileges.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.less']
})
export class DetailsComponent {
    detailsForm = this.fb.group({
        name: [null, Validators.maxLength(150)],
        description: [null, Validators.maxLength(150)],
        privileges: null,
    });

    constructor(
        public privilegeService: PrivilegesService,
        private fb: FormBuilder
    ) { }

    onSubmit() {
        alert('Thanks!');
    }
}
