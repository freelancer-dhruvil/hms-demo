import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class UiService {

    private _sidebarNavItems: MenuItem[] = []; 

    constructor() { }

    public get sideBarNavItems(): MenuItem[] {
        return this._sidebarNavItems;
    }

    public set sideBarNavItems(items: MenuItem[]) {
        this._sidebarNavItems = items;
    }
}
