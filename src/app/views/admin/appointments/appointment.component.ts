import { Component, input, InputSignal, OnInit } from '@angular/core';

@Component({
    selector: 'admin-hospital-appointment',
    templateUrl: './appointment.component.html',
    styleUrl: "./appointment.component.scss"
})
export class HospitalAppointmentComponent implements OnInit {

    appointments = input();
    currentView: InputSignal<"mini-view" | "full-view"> = input<"mini-view" | "full-view">("mini-view");

    constructor() { }

    ngOnInit() { }
}

