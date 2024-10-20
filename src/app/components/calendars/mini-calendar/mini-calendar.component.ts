import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridDay from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';

@Component({
    selector: 'admin-mini-calendar',
    templateUrl: './mini-calendar.component.html',
    styleUrl: './mini-calendar.component.scss'
})
export class MiniCalendarComponent implements OnInit {
    calendarOptions: CalendarOptions = {
        initialView: 'timeGridDay',
        headerToolbar: {
            left: 'title',
            center: '',
            right: 'customAddButton'
        },
        plugins: [timeGridDay, interactionPlugin],
        events: [
            { title: 'event 1', date: new Date() },
            { title: 'event 2', date: new Date() }
        ],
        editable: true,
        selectable: true,
        selectMirror: true,
        customButtons: {
            customAddButton: {
                text: '+',
            },
        }
    };


    constructor() { }

    ngOnInit() {
    }
}
