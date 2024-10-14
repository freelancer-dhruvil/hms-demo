import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'admin-sidebar',
    templateUrl: './admin-sidebar.component.html'
})
export class AdminSidebarComponent implements OnInit {

    items: MenuItem[] | undefined;

    constructor() { }

    ngOnInit() {
        this._loadSideBar();
    }

    private _loadSideBar(): void {
        this.items = [
            {
                label: 'Dashboard',
                icon: 'pi pi-th-large',
                routerLink: 'dashboard',
                routerLinkActiveOptions: 'bg-cyan-200 text-black-alpha-90 font-bold',
            },
            {
                label: 'Appointments',
                icon: 'pi pi-check-square',
                routerLink: 'appointment',
                routerLinkActiveOptions: 'bg-cyan-200 text-black-alpha-90 font-bold',
            },
            {
                label: 'Patients',
                icon: 'pi pi-id-card',
                routerLink: 'patient',
                routerLinkActiveOptions: 'bg-cyan-200 text-black-alpha-90 font-bold',
            },
            {
                label: 'Doctors',
                icon: 'pi pi-users',
                routerLink: 'doctor',
                routerLinkActiveOptions: 'bg-cyan-200 text-black-alpha-90 font-bold',
            },
            {
                label: 'Departments',
                icon: 'pi pi-building',
                routerLink: 'department',
                routerLinkActiveOptions: 'bg-cyan-200 text-black-alpha-90 font-bold',
            },
            {
                label: `Doctor's Schedule`,
                icon: 'pi pi-calendar-plus',
                routerLink: 'schedule',
                routerLinkActiveOptions: 'bg-cyan-200 text-black-alpha-90 font-bold',
            },
            {
                label: 'Payments',
                icon: 'pi pi-credit-card',
                routerLink: 'payment',
                routerLinkActiveOptions: 'bg-cyan-200 text-black-alpha-90 font-bold',
            },
            {
                label: 'Inventory',
                icon: 'pi pi-box',
                routerLink: 'inventory',
                routerLinkActiveOptions: 'bg-cyan-200 text-black-alpha-90 font-bold',
            },
            {
                label: 'Messages',
                icon: 'pi pi-comments',
                routerLink: 'message',
                routerLinkActiveOptions: 'bg-cyan-200 text-black-alpha-90 font-bold',
                badge: "7"
            },

        ]
    }
}

