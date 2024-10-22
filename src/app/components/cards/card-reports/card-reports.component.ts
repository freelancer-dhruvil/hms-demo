import { Component, input, InputSignal, OnInit } from '@angular/core';

@Component({
    selector: 'card-reports',
    templateUrl: './card-reports.component.html',
    styleUrl: './card-reports.component.scss'
})
export class CardReprotsComponent implements OnInit {

    public reports: InputSignal<any[]> = input<any[]>([]);

    ngOnInit(): void {

    }

    public cardAction() {

    }

    public timeAgo(date: Date): string {
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        const minute = 60;
        const hour = 60 * minute;
        const day = 24 * hour;
        const month = 30 * day; // Rough approximation
        const year = 365 * day; // Rough approximation

        if (diffInSeconds < minute) {
            return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
        } else if (diffInSeconds < hour) {
            const minutes = Math.floor(diffInSeconds / minute);
            return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else if (diffInSeconds < day) {
            const hours = Math.floor(diffInSeconds / hour);
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else if (diffInSeconds < month) {
            const days = Math.floor(diffInSeconds / day);
            return `${days} day${days !== 1 ? 's' : ''} ago`;
        } else if (diffInSeconds < year) {
            const months = Math.floor(diffInSeconds / month);
            return `${months} month${months !== 1 ? 's' : ''} ago`;
        } else {
            const years = Math.floor(diffInSeconds / year);
            return `${years} year${years !== 1 ? 's' : ''} ago`;
        }
    }
}
