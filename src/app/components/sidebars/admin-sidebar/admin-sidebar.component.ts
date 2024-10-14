import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StaticDataService } from '../../../services/data.service';
import { UiService } from '../../../services/ui/ui.service';
import { ToastService } from '../../../services/toast/toast.service';

@Component({
    selector: 'admin-sidebar',
    templateUrl: './admin-sidebar.component.html'
})
export class AdminSidebarComponent implements OnInit {

    public items: MenuItem[] = [];
    public sideNavItemsLoading: boolean = false;
    public isBottomBannerVisible: boolean = true;

    constructor(
        private readonly _dataService: StaticDataService,
        private readonly _uiService: UiService,
        private readonly _toastService: ToastService,
    ) { }

    ngOnInit() {
        this._loadSideBar();
    }

    private _loadSideBar(): void {

        this.sideNavItemsLoading = true;

        this._dataService.getSideNavRoutesItems().subscribe({
            next: (items: MenuItem[]) => { 
                this.items = items;
                this._uiService.sideBarNavItems = items;
            },
            error: (err: any) => { 
                console.log("something went worng::", err); 
                this._toastService.showSuccess("Error", "Something went wrong");
            },
            complete: () => { this.sideNavItemsLoading = false; }
        });
    }
}

