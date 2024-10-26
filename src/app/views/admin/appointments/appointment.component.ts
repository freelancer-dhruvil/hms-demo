import { Component, input, InputSignal, OnInit } from '@angular/core';
import { addDays, subDays, format } from 'date-fns';


@Component({
    selector: 'admin-hospital-appointment',
    templateUrl: './appointment.component.html',
    styleUrl: "./appointment.component.scss"
})
export class HospitalAppointmentComponent implements OnInit {

    appointments = input();
    currentView: InputSignal<"mini-view" | "full-view"> = input<"mini-view" | "full-view">("mini-view");
    dates: { dayNum: string, dayName: string, monthNum: string, year: string }[] = [];
    todayDate: string;
    todayMonth: string;

    private _currentStartDate: Date = new Date();

    constructor() { }

    ngOnInit() {
        this._updateDates();
    }

    public updateCurrent(date: any): void {
        this._currentStartDate = new Date(parseInt(date.year),parseInt(date.monthNum) - 1, parseInt(date.dayNum));
        this._updateDates();
    }

    public goToPrevious(): void {
        this._currentStartDate = subDays(this._currentStartDate, 14);
        this._updateDates();
    }

    public goToNext(): void {
        this._currentStartDate = addDays(this._currentStartDate, 14);
        this._updateDates();
    }

    private _updateDates(): void {
        const startDate = this._currentStartDate;
        this.todayDate = this._currentStartDate.getDate().toString();
        this.todayMonth = (this._currentStartDate.getMonth() + 1).toString();
        this.dates = Array.from({ length: 14 }, (_, index) => {
            const date = addDays(startDate, index - 7);
            return {
                dayNum: format(date, 'd'),
                dayName: format(date, 'EEE'),
                monthNum: format(date, 'M'),
                year: format(date, 'yyyy'),
            };
        });
    }
}

