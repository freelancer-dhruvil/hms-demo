import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'admin-header',
    templateUrl: './admin-header.component.html'
})
export class AdminHeaderComponent implements OnInit {

    public userOverlayMenuItems: MenuItem[] = [
        {
            label: 'Edit Profile',
            icon: 'pi pi-user-edit',
            routerLink: "my-profile",
        },
        {
            label: 'Sign Out',
            icon: 'pi pi-sign-out'
        }
    ];

    constructor() { }

    ngOnInit() { }
}

