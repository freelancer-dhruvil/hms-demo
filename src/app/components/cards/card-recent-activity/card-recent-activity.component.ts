import { Component, effect, input, InputSignal, OnInit } from '@angular/core';
import { ActivityModel } from '../../../models/activity.model';

@Component({
    selector: 'card-recent-activity',
    templateUrl: './card-recent-activity.component.html',
    styleUrl: './card-recent-activity.component.scss'
})
export class CardRecentActivityComponent implements OnInit {

    public activities: InputSignal<ActivityModel[]> = input<ActivityModel[]>([]);
    public latestAvailableSlot: any;

    constructor() {
        effect(() => {
            console.log('activity:::', this.activities());
        })
    }

    ngOnInit(): void {

    }


    public formatDateToAMPM(date: Date): string {
        let hours: number = date.getHours();
        const minutes: number = date.getMinutes();

        const ampm: string = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;

        const minutesString: string = minutes < 10 ? '0' + minutes : minutes.toString();

        return `${hours}:${minutesString} ${ampm}`;
    }

    public cardAction() {

    }
}
