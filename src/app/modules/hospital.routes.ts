import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalAdminComponent } from '../views/admin/admin.component';
import { HospitalHomeComponent } from '../views/home/home.component';
import { HospitalDashboardComponent } from '../views/admin/dashboard/dashboard.component';
import { HospitalErrorComponent } from '../views/error/error.component';
import { HospitalAppointmentComponent } from '../views/admin/appointments/appointment.component';
import { HospitalAppointmentDetailsComponent } from '../views/admin/appointments/appointment-details/appointment-details.component';
import { HospitalManageAppointmentComponent } from '../views/admin/appointments/manage-appointment/manage-appointment.component';
import { HospitalPatientComponent } from '../views/admin/patients/patient.component';
import { HospitalPatientDetailsComponent } from '../views/admin/patients/patient-details/patient-details.component';
import { HospitalManagePatientComponent } from '../views/admin/patients/manage-patient/manage-patient.component';
import { HospitalDoctorComponent } from '../views/admin/doctors/doctor.component';
import { HospitalDoctorDetailsComponent } from '../views/admin/doctors/doctor-details/doctor-details.component';
import { HospitalManageDoctorComponent } from '../views/admin/doctors/manage-doctor/manage-doctor.component';
import { HospitalDepartmentComponent } from '../views/admin/departments/department.component';
import { HospitalDepartmentDetailsComponent } from '../views/admin/departments/department-details/department-details.component';
import { HospitalManageDepartmentComponent } from '../views/admin/departments/manage-department/manage-department.component';
import { HospitalScheduleComponent } from '../views/admin/schedule/schedule.component';
import { HospitalPaymentComponent } from '../views/admin/payments/payment.component';
import { HospitalPaymentDetailsComponent } from '../views/admin/payments/payment-details/payment-details.component';
import { HospitalManagePaymentComponent } from '../views/admin/payments/manage-payment/manage-payment.component';
import { HospitalProductComponent } from '../views/admin/inventory/product.component';
import { HospitalProductDetailsComponent } from '../views/admin/inventory/product-details/product-details.component';
import { HospitalManageProductComponent } from '../views/admin/inventory/manage-product/manage-product.component';
import { HospitalMessageComponent } from '../views/admin/messages/message.component';
import { HospitalMessageDetailsComponent } from '../views/admin/messages/message-details/message-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full'},
    { path: 'home', component: HospitalHomeComponent},
    { 
        path: 'admin', 
        component: HospitalAdminComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            { path:'dashboard', component: HospitalDashboardComponent },
            { 
                path:'appointment',
                component:  HospitalAppointmentComponent,
                children: [
                    { path:'details', component: HospitalAppointmentDetailsComponent },
                    { path:'manage', component: HospitalManageAppointmentComponent },
                ]
            },
            { 
                path:'patient',
                component:  HospitalPatientComponent,
                children: [
                    { path:'details', component: HospitalPatientDetailsComponent },
                    { path:'manage', component: HospitalManagePatientComponent },
                ]
            },
            { 
                path:'doctor',
                component:  HospitalDoctorComponent,
                children: [
                    { path:'details', component: HospitalDoctorDetailsComponent },
                    { path:'manage', component: HospitalManageDoctorComponent },
                ]
            },
            { 
                path:'department',
                component:  HospitalDepartmentComponent,
                children: [
                    { path:'details', component: HospitalDepartmentDetailsComponent },
                    { path:'manage', component: HospitalManageDepartmentComponent },
                ]
            },
            { 
                path:'schedule',
                component:  HospitalScheduleComponent
            },
            { 
                path:'payment',
                component:  HospitalPaymentComponent,
                children: [
                    { path:'details', component: HospitalPaymentDetailsComponent },
                    { path:'manage', component: HospitalManagePaymentComponent },
                ]
            },
            { 
                path:'inventory',
                component:  HospitalProductComponent,
                children: [
                    { path:'details', component: HospitalProductDetailsComponent },
                    { path:'manage', component: HospitalManageProductComponent },
                ]
            },
            { 
                path:'message',
                component:  HospitalMessageComponent,
                children: [
                    { path:'details', component: HospitalMessageDetailsComponent }
                ]
            },
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

    HospitalAppointmentComponent,
    HospitalAppointmentDetailsComponent,
    HospitalManageAppointmentComponent,

    HospitalPatientComponent,
    HospitalPatientDetailsComponent,
    HospitalManagePatientComponent,

    HospitalDoctorComponent,
    HospitalDoctorDetailsComponent,
    HospitalManageDoctorComponent,

    HospitalDepartmentComponent,
    HospitalDepartmentDetailsComponent,
    HospitalManageDepartmentComponent,

    HospitalScheduleComponent,

    HospitalPaymentComponent,
    HospitalPaymentDetailsComponent,
    HospitalManagePaymentComponent,

    HospitalProductComponent,
    HospitalProductDetailsComponent,
    HospitalManageProductComponent,

    HospitalMessageComponent,
    HospitalMessageDetailsComponent,

    HospitalErrorComponent
];