import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalAdminComponent } from '../views/admin/admin.component';
import { HospitalHomeComponent } from '../views/home/home.component';
import { HospitalDashboardComponent } from '../views/admin/dashboard/dashboard.component';
import { HospitalErrorComponent } from '../views/error/error.component';

export const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full'},
    { path: 'home', component: HospitalHomeComponent},
    { 
        path: 'admin', 
        component: HospitalAdminComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            { path:'dashboard', component: HospitalDashboardComponent },
        ]
    },
    {path: '**', component: HospitalErrorComponent, pathMatch: 'full'},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HospitalRoutingModule { }

export const HospitalRouteComponentsArray = 
[
    HospitalHomeComponent,
    HospitalAdminComponent,
    HospitalDashboardComponent,
    HospitalErrorComponent
];