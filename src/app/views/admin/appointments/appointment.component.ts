import { AfterViewInit, Component, effect, input, InputSignal, OnInit, viewChild } from '@angular/core';
import { addDays, subDays, format } from 'date-fns';
import { AppointmentModel } from '../../../models/appointment.model';
import { StaticDataService } from '../../../services/data.service';
import { IColumn } from '../../../models/columns.interface';
import { ColumnTypes } from '../../../constants/column-types.enum';
import { UiService } from '../../../services/ui/ui.service';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'admin-hospital-appointment',
    templateUrl: './appointment.component.html',
    styleUrl: "./appointment.component.scss"
})
export class HospitalAppointmentComponent implements OnInit, AfterViewInit {

    appointmentsData: AppointmentModel[];
    currentView: InputSignal<"mini-view" | "full-view"> = input<"mini-view" | "full-view">("full-view");
    public customActionButtons = viewChild('tableActionButtons');
    dates: { dayNum: string, dayName: string, monthNum: string, year: string }[] = [];
    todayDate: string;
    todayMonth: string;
    public searchQuery: string;
    public isLoading: boolean = false;
    public currentViewIndex: number = 0;
    public currentTimeIndex: number = 3;
    public allViews: MenuItem[] = [
        {
            label: 'All',
            id: 'all',
            isActive: true,
            count: 123,
            command: () => {
                this.viewChange('all', 0);
            }
        },
        {
            label: 'Confirmed',
            id: 'confirmed',
            isActive: false,
            count: 123,
            command: () => {
                this.viewChange('confirmed', 1);
            }
        },
        {
            label: 'Pending',
            id: 'pending',
            isActive: false,
            count: 123,
            command: () => {
                this.viewChange('pending', 2);
            }
        },
        {
            label: 'Cancelled',
            id: 'cancelled',
            isActive: false,
            count: 123,
            command: () => {
                this.viewChange('cancelled', 2);
            }
        },
    ];

    public allTimes: MenuItem[] = [
        {
            label: 'Today',
            id: 'today',
            isActive: false,
            command: () => {
                this.timeChange('today', 3);
            }
        },
        {
            label: 'Last 8 Days',
            id: 'week',
            isActive: true,
            command: () => {
                this.timeChange('week', 0);
            }
        },
        {
            label: 'Last Month',
            id: 'month',
            isActive: false,
            command: () => {
                this.timeChange('month', 1);
            }
        },
        {
            label: 'Last Year',
            id: 'year',
            isActive: false,
            command: () => {
                this.timeChange('year', 2);
            }
        },

    ]

    public actionButtons: MenuItem[] = [
        {
            label: 'Reschedule',
            command: () => {
                this.rescheduleAction();
            }
        },
        {
            label: 'Cancel',
            command: () => {
                this.cancelAction();
            }
        },
    ]

    public appointmentsColumns: IColumn[] = [];

    public itemRef: AppointmentModel | undefined;

    private _currentStartDate: Date = new Date();

    constructor(
        private readonly _hospitalService: StaticDataService,
        private readonly _uiService: UiService,
    ) {
    }

    ngOnInit() {
        this.getAppointmentsList(new Date());
    }

    ngAfterViewInit(): void {
        this._updateDates();
        this._prepareColumns();
    }

    public viewChange(status: 'all' | 'confirmed' | 'pending' | 'cancelled', index: number) {

        if (this.currentViewIndex === index) return;

        this.currentViewIndex = index;
    }

    public timeChange(id: "today" | "week" | "month" | "year", index: number) {

        if (this.currentTimeIndex === index) return;

        this.currentTimeIndex = index;
    }

    public addAppointment(): void {
        console.log('add new appointment');

    }

    getAppointmentsList(date: Date) {
        (<any>this.appointmentsData) = undefined;
        this.isLoading = true;
        const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
        const endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);

        this._hospitalService.getAppointmentsList(startOfDay, endOfDay)
            .subscribe((data: AppointmentModel[]) => {
                this.appointmentsData = data.map((d: AppointmentModel) => {
                    let tempStartDateTime = new Date(d.startDateTime);
                    d.startDateTime = this._uiService.formatDateToAMPM(new Date(d.startDateTime));
                    return {
                        ...d,
                        startDate: format(tempStartDateTime, 'dd MMMM yyyy'),
                        action: 'cancel',
                        statusServity: this._getServity(d),
                        actionButtons: this.customActionButtons(),
                    }
                })
                console.log(this.appointmentsData);
                this.isLoading = false;
            });
    }

    public updateCurrent(date: any): void {
        this._currentStartDate = new Date(parseInt(date.year), parseInt(date.monthNum) - 1, parseInt(date.dayNum));
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

    public selectionChange(data: any): void {
        console.log(data);
    }

    public rescheduleAction(item?: AppointmentModel): void {
        if (item) {
            console.log("rescheule:::", item);
        } else {
            console.log("rescheule:::", this.itemRef);
        }
    }

    public cancelAction(item?: AppointmentModel): void {
        if (item) {
            console.log("cancel:::", item);
        } else {
            console.log("cancel:::", this.itemRef);
        }
    }

    private _prepareColumns() {
        console.log('action buttons :::', this.customActionButtons());

        this.appointmentsColumns = [
            {
                fieldName: "patientName",
                columnHeader: "Name",
                isColumnVisible: true,
                isFilterable: true,
                isSortable: true,
                colType: ColumnTypes.CHECKBOX,
            },
            {
                fieldName: "patientName",
                columnHeader: "Name",
                isColumnVisible: true,
                isFilterable: true,
                isSortable: true,
            },
            {
                fieldName: "startDate",
                columnHeader: "Date",
                isColumnVisible: true,
                isFilterable: true,
                isSortable: true,
            },
            {
                fieldName: "startDateTime",
                columnHeader: "Time",
                isColumnVisible: true,
                isFilterable: true,
                isSortable: true,
            },
            {
                fieldName: "doctorName",
                columnHeader: "Doctor",
                isColumnVisible: true,
                isFilterable: true,
                isSortable: true,
            },
            {
                fieldName: "treatment",
                columnHeader: "Treatment",
                isColumnVisible: true,
                isFilterable: true,
                isSortable: true,
            },
            {
                fieldName: "statusName",
                columnHeader: "Status",
                isColumnVisible: true,
                isFilterable: false,
                isSortable: true,
                colType: ColumnTypes.BADGE_TAG,
                servityFieldName: "statusServity"

            },
            {
                fieldName: "actionButtons",
                columnHeader: this.currentView() === "full-view" ? "Action" : "",
                isColumnVisible: true,
                isFilterable: false,
                colType: ColumnTypes.CUSTOM,
            },
        ];
    }

    private _getServity(data: AppointmentModel): string {
        console.log(data.statusName);

        switch (data.statusName) {
            case 'Confirmed':
                return 'success'
            case 'Pending':
                return 'danger'
            case 'Cancelled':
                return 'secondary'
            case 'Rescheduled':
                return 'warning'
            default:
                return 'Cancelled'
        }
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
        this.getAppointmentsList(this._currentStartDate);
    }
}

