import { Component, effect, input, InputSignal, OnInit } from '@angular/core';
import { ScheduleModel } from '../../../models/schedule.model';

@Component({
    selector: 'card-doctor-schedule',
    templateUrl: './card-doctor-schedule.component.html',
    styleUrl: './card-doctor-schedule.component.scss'
})
export class CardDoctorScheduleComponent implements OnInit {

    public schedules: InputSignal<ScheduleModel[]> = input<ScheduleModel[]>([]);
    public latestAvailableSlot: any;

    constructor() {
        effect(() => {
        })
    }

    ngOnInit(): void {

    }

    public getFirstAvailableSlot(slots: any[]): string {
        function formatTime(dateString: any) {
            const options: Intl.DateTimeFormatOptions = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }; const date = new Date(dateString);
            return date.toLocaleTimeString('en-US', options);
        }

        if (slots.length > 0) {
            const firstSlot = slots[0];
            const startTimeFormatted = formatTime(firstSlot.startTime);
            const endTimeFormatted = formatTime(firstSlot.endTime);
            return `${startTimeFormatted} - ${endTimeFormatted}`;
        }

        return ""; 
    }

    public getSeverity(schedule: ScheduleModel): "success" | "danger" {
        if (schedule.availableSlots.length > 0) {
            this.latestAvailableSlot = schedule.availableSlots;
            return 'success';
        }
        return 'danger';
    };

    public cardAction() {
        
    }
}
