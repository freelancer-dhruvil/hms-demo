import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UiService {

    private _sidebarNavItems$: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);
    private _activeNavItem$: BehaviorSubject<MenuItem> = new BehaviorSubject<MenuItem>({});

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
    ) {
        this._registerRouteChangeListerner();
    }

    public setActiveNavItem(): void {
        let routes = this._router.url.split("/admin");
        routes.shift();
        routes = routes[0].split("/")
        routes.shift();
        let activeLink = this._sidebarNavItems$.getValue().find((val) => {
            return val.routerLink === routes[0];
        });
        activeLink && (activeLink["active"] = true);
        this._activeNavItem$.next(activeLink ?? {});        
    }

    public getActiveNavItem(): Observable<MenuItem> {
        return this._activeNavItem$.asObservable();
    }

    public getSideBarNavItems(): Observable<MenuItem[]> {
        return this._sidebarNavItems$.asObservable();
    }

    public setSideBarNavItems(items: MenuItem[]) {
        this._sidebarNavItems$.next(items);
    }

    public formatDateToAMPM(date: Date): string {
        console.log(date);
        
        let hours: number = date.getHours();
        const minutes: number = date.getMinutes();

        const ampm: string = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;

        const minutesString: string = minutes < 10 ? '0' + minutes : minutes.toString();

        return `${hours}:${minutesString} ${ampm}`;
    }


    private _registerRouteChangeListerner(): void {
        this._router.events.pipe(
            filter(event => event instanceof NavigationEnd) // Only handle NavigationEnd events
        ).subscribe(() => {
            console.log("route change triggered");
            this.setActiveNavItem();
        });
    }
}
