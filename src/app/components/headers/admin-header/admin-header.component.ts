import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UiService } from '../../../services/ui/ui.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'admin-header',
    templateUrl: './admin-header.component.html'
})
export class AdminHeaderComponent implements OnInit {

    public isUnreadNotification: boolean = false;
    public userFullName: string = "John Wick";
    public primaryHeader: string = "Dashboard";
    public secondaryHeader: string = "";
    public isSecondaryPage: boolean = false;

    public userProfileMenuItems: MenuItem[] = [
        { label: 'Profile', icon: 'pi pi-user' },
        { label: 'Log Out', icon: 'pi pi-sign-out' }
    ];

    private _currentActiveItemRef: MenuItem;

    constructor(
        private readonly _uiService: UiService,
        private readonly _router: Router,
    ) { }

    ngOnInit() {
        setTimeout(() => {
            this.isUnreadNotification = true;
        }, 500);

        this._registerRouteValues();
    }

    public navigateToParent(): void {
        console.log(this._router.url);
        let segments = this._router.url.split("/");
        segments.pop();
        this._router.navigate(segments);
    }

    private _registerRouteValues(): void {
        this._uiService.getActiveNavItem().subscribe((val) => { 
            this._currentActiveItemRef = val;
            let subRoute = window.location.href.split("/").pop();
            this.primaryHeader = val.label ?? 'Dashboard';
            if (val.routerLink !== subRoute) {
                this.isSecondaryPage = true;
                this.secondaryHeader = val['children'] ? (val['children'] as any[]).find(i => i.routerLink === subRoute)?.subLabel : '';
            } 
            else {
                this.secondaryHeader = '';
                this.isSecondaryPage = false;
            }
        });
    }
}

