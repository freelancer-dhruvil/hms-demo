import { Injectable } from "@angular/core";
import { CardStatsModel } from "../models/card.model";
import { ChartModel } from "../models/chart.model";
import { Subject } from "rxjs";
import { Appointment, AvailableSlot, ScheduleModel } from "../models/schedule.model";
import { RequestModel } from "../models/request.model";
import { ActivityModel } from "../models/activity.model";
import { MenuItem } from "primeng/api";

@Injectable({
    providedIn: 'root'
})

export class StaticDataService {

    //#region Card Stats
    totalInvoiceStats: CardStatsModel = {
        title: 'Total Invoice',
        icon: '',
        value: 1287,
        compareValue: 1260
    }

    totalPatientStats: CardStatsModel = {
        title: 'Total Patients',
        icon: '',
        value: 965,
        compareValue: 920
    }

    totalAppointmentStats: CardStatsModel = {
        title: 'Appointments',
        icon: '',
        value: 128,
        compareValue: 146
    }

    totalBedroomStats: CardStatsModel = {
        title: 'Bedroom',
        icon: '',
        value: 315,
        compareValue: 259
    }
    //#endregion

    //#region Charts
    //#region Patient Overview by Age
    patientOverviewWeekChart: ChartModel = {
        title: 'Patient Overview',
        description: 'by Age Stages',
        type: 'bar',
        duration: 'week',
        data: [
            {
                name: 'Child',
                records: [
                    { date: new Date(2024, 10, 6), value: 93 },
                    { date: new Date(2024, 10, 7), value: 81 },
                    { date: new Date(2024, 10, 8), value: 124 },
                    { date: new Date(2024, 10, 9), value: 110 },
                    { date: new Date(2024, 10, 10), value: 120 },
                    { date: new Date(2024, 10, 11), value: 85 },
                    { date: new Date(2024, 10, 12), value: 100 }
                ]
            },
            {
                name: 'Adult',
                records: [
                    { date: new Date(2024, 10, 6), value: 52 },
                    { date: new Date(2024, 10, 7), value: 41 },
                    { date: new Date(2024, 10, 8), value: 72 },
                    { date: new Date(2024, 10, 9), value: 80 },
                    { date: new Date(2024, 10, 10), value: 90 },
                    { date: new Date(2024, 10, 11), value: 72 },
                    { date: new Date(2024, 10, 12), value: 80 }
                ]
            },
            {
                name: 'Elderly',
                records: [
                    { date: new Date(2024, 10, 6), value: 22 },
                    { date: new Date(2024, 10, 7), value: 0 },
                    { date: new Date(2024, 10, 8), value: 18 },
                    { date: new Date(2024, 10, 9), value: 37 },
                    { date: new Date(2024, 10, 10), value: 0 },
                    { date: new Date(2024, 10, 11), value: 0 },
                    { date: new Date(2024, 10, 12), value: 42 }
                ]
            }
        ]
    }

    patientOverviewMonthChart: ChartModel = {
        title: 'Patient Overview',
        description: 'by Age Stages',
        type: 'bar',
        duration: 'month',
        data: [
            {
                name: 'Child',
                records: [
                    { date: new Date(2024, 10, 1), value: 81 },   // 1st week of November
                    { date: new Date(2024, 10, 8), value: 124 },  // 2nd week of November
                    { date: new Date(2024, 10, 15), value: 110 }, // 3rd week of November
                    { date: new Date(2024, 10, 22), value: 120 }, // 4th week of November
                    { date: new Date(2024, 10, 29), value: 85 }   // 5th week of November
                ]
            },
            {
                name: 'Adult',
                records: [
                    { date: new Date(2024, 10, 1), value: 41 },   // 1st week of November
                    { date: new Date(2024, 10, 8), value: 72 },   // 2nd week of November
                    { date: new Date(2024, 10, 15), value: 80 },  // 3rd week of November
                    { date: new Date(2024, 10, 22), value: 90 },  // 4th week of November
                    { date: new Date(2024, 10, 29), value: 72 }   // 5th week of November
                ]
            },
            {
                name: 'Elderly',
                records: [
                    { date: new Date(2024, 10, 1), value: 0 },    // 1st week of November
                    { date: new Date(2024, 10, 8), value: 18 },   // 2nd week of November
                    { date: new Date(2024, 10, 15), value: 37 },  // 3rd week of November
                    { date: new Date(2024, 10, 22), value: 0 },   // 4th week of November
                    { date: new Date(2024, 10, 29), value: 42 }   // 5th week of November
                ]
            }
        ]
    }

    patientOverviewYearChart: ChartModel = {
        title: 'Patient Overview',
        description: 'by Age Stages',
        type: 'bar',
        duration: 'year',
        data: [
            {
                name: 'Child',
                records: [
                    { date: new Date(2024, 0, 1), value: 881 },  // January
                    { date: new Date(2024, 1, 1), value: 1124 }, // February
                    { date: new Date(2024, 2, 1), value: 110 },  // March
                    { date: new Date(2024, 3, 1), value: 320 },  // April
                    { date: new Date(2024, 4, 1), value: 785 },  // May
                    { date: new Date(2024, 5, 1), value: 600 },  // June
                    { date: new Date(2024, 6, 1), value: 581 },  // July
                    { date: new Date(2024, 7, 1), value: 424 },  // August
                    { date: new Date(2024, 8, 1), value: 210 },  // September
                    { date: new Date(2024, 9, 1), value: 720 },  // October
                    { date: new Date(2024, 10, 1), value: 325 }, // November
                    { date: new Date(2024, 11, 1), value: 610 }  // December
                ]
            },
            {
                name: 'Adult',
                records: [
                    { date: new Date(2024, 0, 1), value: 441 },  // January
                    { date: new Date(2024, 1, 1), value: 172 },  // February
                    { date: new Date(2024, 2, 1), value: 280 },  // March
                    { date: new Date(2024, 3, 1), value: 490 },  // April
                    { date: new Date(2024, 4, 1), value: 372 },  // May
                    { date: new Date(2024, 5, 1), value: 80 },   // June
                    { date: new Date(2024, 6, 1), value: 541 },  // July
                    { date: new Date(2024, 7, 1), value: 972 },  // August
                    { date: new Date(2024, 8, 1), value: 80 },   // September
                    { date: new Date(2024, 9, 1), value: 890 },  // October
                    { date: new Date(2024, 10, 1), value: 72 },   // November
                    { date: new Date(2024, 11, 1), value: 180 }  // December
                ]
            },
            {
                name: 'Elderly',
                records: [
                    { date: new Date(2024, 0, 1), value: 10 },   // January
                    { date: new Date(2024, 1, 1), value: 58 },   // February
                    { date: new Date(2024, 2, 1), value: 37 },   // March
                    { date: new Date(2024, 3, 1), value: 60 },   // April
                    { date: new Date(2024, 4, 1), value: 0 },    // May
                    { date: new Date(2024, 5, 1), value: 42 },   // June
                    { date: new Date(2024, 6, 1), value: 70 },   // July
                    { date: new Date(2024, 7, 1), value: 18 },   // August
                    { date: new Date(2024, 8, 1), value: 27 },   // September
                    { date: new Date(2024, 9, 1), value: 0 },    // October
                    { date: new Date(2024, 10, 1), value: 50 },   // November
                    { date: new Date(2024, 11, 1), value: 142 }  // December
                ]
            }
        ]
    };
    //#endregion

    //#region Revenue
    revenueWeekChart: ChartModel = {
        title: 'Revenue',
        description: '',
        type: 'line',
        duration: 'week',
        data: [
            {
                name: 'Income',
                records: [
                    { date: new Date(2024, 10, 6), value: 1145 },
                    { date: new Date(2024, 10, 7), value: 900 },
                    { date: new Date(2024, 10, 8), value: 1200 },
                    { date: new Date(2024, 10, 9), value: 1100 },
                    { date: new Date(2024, 10, 10), value: 1495 },
                    { date: new Date(2024, 10, 11), value: 800 },
                    { date: new Date(2024, 10, 12), value: 1300 }
                ]
            },
            {
                name: 'Expense',
                records: [
                    { date: new Date(2024, 10, 6), value: 825 },
                    { date: new Date(2024, 10, 7), value: 700 },
                    { date: new Date(2024, 10, 8), value: 400 },
                    { date: new Date(2024, 10, 9), value: 790 },
                    { date: new Date(2024, 10, 10), value: 415 },
                    { date: new Date(2024, 10, 11), value: 720 },
                    { date: new Date(2024, 10, 12), value: 800 }
                ]
            }
        ]
    }

    revenueMonthChart: ChartModel = {
        title: 'Revenue',
        description: '',
        type: 'line',
        duration: 'month',
        data: [
            {
                name: 'Income',
                records: [
                    { date: new Date(2024, 10, 1), value: 481 },   // 1st week of November
                    { date: new Date(2024, 10, 8), value: 1124 },  // 2nd week of November
                    { date: new Date(2024, 10, 15), value: 410 },  // 3rd week of November
                    { date: new Date(2024, 10, 22), value: 720 },  // 4th week of November
                    { date: new Date(2024, 10, 29), value: 1085 }  // 5th week of November
                ]
            },
            {
                name: 'Expense',
                records: [
                    { date: new Date(2024, 10, 1), value: 281 },   // 1st week of November
                    { date: new Date(2024, 10, 8), value: 224 },   // 2nd week of November
                    { date: new Date(2024, 10, 15), value: 110 },  // 3rd week of November
                    { date: new Date(2024, 10, 22), value: 420 },  // 4th week of November
                    { date: new Date(2024, 10, 29), value: 885 }   // 5th week of November
                ]
            }
        ]
    }

    revenueYearChart: ChartModel = {
        title: 'Revenue',
        description: '',
        type: 'line',
        duration: 'year',
        data: [
            {
                name: 'Income',
                records: [
                    { date: new Date(2024, 1, 1), value: 21881 },
                    { date: new Date(2024, 2, 1), value: 19124 },
                    { date: new Date(2024, 3, 1), value: 15810 },
                    { date: new Date(2024, 4, 1), value: 14320 },
                    { date: new Date(2024, 5, 1), value: 16785 },
                    { date: new Date(2024, 6, 1), value: 14600 },
                    { date: new Date(2024, 7, 1), value: 16581 },
                    { date: new Date(2024, 8, 1), value: 20424 },
                    { date: new Date(2024, 9, 1), value: 21210 },
                    { date: new Date(2024, 10, 1), value: 19720 },
                    { date: new Date(2024, 11, 1), value: 17325 },
                    { date: new Date(2024, 12, 1), value: 15610 }
                ]
            },
            {
                name: 'Expense',
                records: [
                    { date: new Date(2024, 1, 1), value: 11441 },
                    { date: new Date(2024, 2, 1), value: 12372 },
                    { date: new Date(2024, 3, 1), value: 10280 },
                    { date: new Date(2024, 4, 1), value: 8490 },
                    { date: new Date(2024, 5, 1), value: 7372 },
                    { date: new Date(2024, 6, 1), value: 7280 },
                    { date: new Date(2024, 7, 1), value: 5541 },
                    { date: new Date(2024, 8, 1), value: 3972 },
                    { date: new Date(2024, 9, 1), value: 4280 },
                    { date: new Date(2024, 10, 1), value: 8890 },
                    { date: new Date(2024, 11, 1), value: 10172 },
                    { date: new Date(2024, 12, 1), value: 12180 }
                ]
            }
        ]
    }
    //#endregion

    //#region Patient Overview by Departments
    patientDeptWeekChart: ChartModel = {
        title: 'Patient Overview',
        description: 'by Departments',
        type: 'pie',
        duration: 'week',
        data: [
            {
                name: 'Emergency Medicine',
                records: [
                    { date: new Date(2024, 10, 6), value: 120 },
                    { date: new Date(2024, 10, 7), value: 110 },
                    { date: new Date(2024, 10, 8), value: 140 },
                    { date: new Date(2024, 10, 9), value: 130 },
                    { date: new Date(2024, 10, 10), value: 115 },
                    { date: new Date(2024, 10, 11), value: 125 },
                    { date: new Date(2024, 10, 12), value: 135 }
                ]
            },
            {
                name: 'General Medicine',
                records: [
                    { date: new Date(2024, 10, 6), value: 80 },
                    { date: new Date(2024, 10, 7), value: 85 },
                    { date: new Date(2024, 10, 8), value: 90 },
                    { date: new Date(2024, 10, 9), value: 100 },
                    { date: new Date(2024, 10, 10), value: 95 },
                    { date: new Date(2024, 10, 11), value: 105 },
                    { date: new Date(2024, 10, 12), value: 110 }
                ]
            },
            {
                name: 'Internal Medicine',
                records: [
                    { date: new Date(2024, 10, 6), value: 60 },
                    { date: new Date(2024, 10, 7), value: 70 },
                    { date: new Date(2024, 10, 8), value: 80 },
                    { date: new Date(2024, 10, 9), value: 75 },
                    { date: new Date(2024, 10, 10), value: 85 },
                    { date: new Date(2024, 10, 11), value: 90 },
                    { date: new Date(2024, 10, 12), value: 95 }
                ]
            },
            {
                name: 'Other Departments',
                records: [
                    { date: new Date(2024, 10, 6), value: 50 },
                    { date: new Date(2024, 10, 7), value: 40 },
                    { date: new Date(2024, 10, 8), value: 60 },
                    { date: new Date(2024, 10, 9), value: 55 },
                    { date: new Date(2024, 10, 10), value: 70 },
                    { date: new Date(2024, 10, 11), value: 65 },
                    { date: new Date(2024, 10, 12), value: 75 }
                ]
            }
        ]
    }

    patientDeptMonthChart: ChartModel = {
        title: 'Patient Overview',
        description: 'by Departments',
        type: 'pie',
        duration: 'month',
        data: [
            {
                name: 'Emergency Medicine',
                records: [
                    { date: new Date(2024, 9, 1), value: 350 },
                    { date: new Date(2024, 9, 7), value: 360 },
                    { date: new Date(2024, 9, 14), value: 380 },
                    { date: new Date(2024, 9, 21), value: 390 },
                    { date: new Date(2024, 9, 28), value: 410 },
                ]
            },
            {
                name: 'General Medicine',
                records: [
                    { date: new Date(2024, 9, 1), value: 250 },
                    { date: new Date(2024, 9, 7), value: 265 },
                    { date: new Date(2024, 9, 14), value: 270 },
                    { date: new Date(2024, 9, 21), value: 280 },
                    { date: new Date(2024, 9, 28), value: 290 },
                ]
            },
            {
                name: 'Internal Medicine',
                records: [
                    { date: new Date(2024, 9, 1), value: 180 },
                    { date: new Date(2024, 9, 7), value: 190 },
                    { date: new Date(2024, 9, 14), value: 200 },
                    { date: new Date(2024, 9, 21), value: 210 },
                    { date: new Date(2024, 9, 28), value: 220 },
                ]
            },
            {
                name: 'Other Departments',
                records: [
                    { date: new Date(2024, 9, 1), value: 140 },
                    { date: new Date(2024, 9, 7), value: 150 },
                    { date: new Date(2024, 9, 14), value: 160 },
                    { date: new Date(2024, 9, 21), value: 170 },
                    { date: new Date(2024, 9, 28), value: 180 },
                ]
            }
        ]
    }

    patientDeptYearChart: ChartModel = {
        title: 'Patient Overview',
        description: 'by Departments',
        type: 'pie',
        duration: 'year',
        data: [
            {
                name: 'Emergency Medicine',
                records: [
                    { date: new Date(2024, 0, 1), value: 1200 },  // January
                    { date: new Date(2024, 1, 1), value: 1150 },  // February
                    { date: new Date(2024, 2, 1), value: 1300 },  // March
                    { date: new Date(2024, 3, 1), value: 1250 },  // April
                    { date: new Date(2024, 4, 1), value: 1400 },  // May
                    { date: new Date(2024, 5, 1), value: 1350 },  // June
                    { date: new Date(2024, 6, 1), value: 1500 },  // July
                    { date: new Date(2024, 7, 1), value: 1600 },  // August
                    { date: new Date(2024, 8, 1), value: 1550 },  // September
                    { date: new Date(2024, 9, 1), value: 1450 },  // October
                    { date: new Date(2024, 10, 1), value: 1350 }, // November
                    { date: new Date(2024, 11, 1), value: 1500 }  // December
                ]
            },
            {
                name: 'General Medicine',
                records: [
                    { date: new Date(2024, 0, 1), value: 900 },  // January
                    { date: new Date(2024, 1, 1), value: 850 },  // February
                    { date: new Date(2024, 2, 1), value: 950 },  // March
                    { date: new Date(2024, 3, 1), value: 920 },  // April
                    { date: new Date(2024, 4, 1), value: 1000 }, // May
                    { date: new Date(2024, 5, 1), value: 980 },  // June
                    { date: new Date(2024, 6, 1), value: 1100 }, // July
                    { date: new Date(2024, 7, 1), value: 1050 }, // August
                    { date: new Date(2024, 8, 1), value: 1020 }, // September
                    { date: new Date(2024, 9, 1), value: 950 },  // October
                    { date: new Date(2024, 10, 1), value: 960 }, // November
                    { date: new Date(2024, 11, 1), value: 1020 } // December
                ]
            },
            {
                name: 'Internal Medicine',
                records: [
                    { date: new Date(2024, 0, 1), value: 750 },  // January
                    { date: new Date(2024, 1, 1), value: 700 },  // February
                    { date: new Date(2024, 2, 1), value: 780 },  // March
                    { date: new Date(2024, 3, 1), value: 740 },  // April
                    { date: new Date(2024, 4, 1), value: 820 },  // May
                    { date: new Date(2024, 5, 1), value: 800 },  // June
                    { date: new Date(2024, 6, 1), value: 900 },  // July
                    { date: new Date(2024, 7, 1), value: 870 },  // August
                    { date: new Date(2024, 8, 1), value: 840 },  // September
                    { date: new Date(2024, 9, 1), value: 810 },  // October
                    { date: new Date(2024, 10, 1), value: 820 }, // November
                    { date: new Date(2024, 11, 1), value: 850 }  // December
                ]
            },
            {
                name: 'Other Departments',
                records: [
                    { date: new Date(2024, 0, 1), value: 600 },  // January
                    { date: new Date(2024, 1, 1), value: 550 },  // February
                    { date: new Date(2024, 2, 1), value: 650 },  // March
                    { date: new Date(2024, 3, 1), value: 620 },  // April
                    { date: new Date(2024, 4, 1), value: 700 },  // May
                    { date: new Date(2024, 5, 1), value: 680 },  // June
                    { date: new Date(2024, 6, 1), value: 750 },  // July
                    { date: new Date(2024, 7, 1), value: 720 },  // August
                    { date: new Date(2024, 8, 1), value: 700 },  // September
                    { date: new Date(2024, 9, 1), value: 680 },  // October
                    { date: new Date(2024, 10, 1), value: 690 }, // November
                    { date: new Date(2024, 11, 1), value: 720 }  // December
                ]
            }
        ]
    }
    //#endregion
    //#endregion

    // Doctor's Schedule
    doctorSchedules = [
        new ScheduleModel(
            'Dr. Petra Winsburry',
            'General Medicine',
            'https://example.com/image1.jpg',
            [
                new AvailableSlot(new Date('2024-10-12T09:00:00'), new Date('2024-10-12T10:00:00')),
                new AvailableSlot(new Date('2024-10-12T10:00:00'), new Date('2024-10-12T11:00:00')),
                new AvailableSlot(new Date('2024-10-12T11:00:00'), new Date('2024-10-12T12:00:00')),
            ],
            [
                new Appointment(new Date('2024-10-12'), new Date('2024-10-12T09:00:00'), new Date('2024-10-12T09:30:00'), 'Jane Smith', 'Discuss test results'),
                new Appointment(new Date('2024-10-12'), new Date('2024-10-12T10:00:00'), new Date('2024-10-12T10:30:00'), 'Michael Johnson', 'Follow-up appointment'),
            ]
        ),
        new ScheduleModel(
            'Dr. Ameena Karim',
            'Orthopedics',
            'https://example.com/image2.jpg',
            [],
            [
                new Appointment(new Date('2024-10-12'), new Date('2024-10-12T09:30:00'), new Date('2024-10-12T10:00:00'), 'Emma Wilson', 'Initial consultation'),
                new Appointment(new Date('2024-10-12'), new Date('2024-10-12T11:00:00'), new Date('2024-10-12T11:30:00'), 'David Green', 'Follow-up visit'),
            ]
        ),
        new ScheduleModel(
            'Dr. Olivia Martinez',
            'Cardiology',
            'https://example.com/image3.jpg',
            [
                new AvailableSlot(new Date('2024-10-12T10:30:00'), new Date('2024-10-12T11:30:00')),
                new AvailableSlot(new Date('2024-10-12T12:00:00'), new Date('2024-10-12T13:00:00')),
                new AvailableSlot(new Date('2024-10-12T14:00:00'), new Date('2024-10-12T15:00:00')),
            ],
            [
                new Appointment(new Date('2024-10-12'), new Date('2024-10-12T10:30:00'), new Date('2024-10-12T11:00:00'), 'Sophia Taylor', 'Check-up'),
                new Appointment(new Date('2024-10-12'), new Date('2024-10-12T12:00:00'), new Date('2024-10-12T12:30:00'), 'Liam Brown', 'Vaccination'),
            ]
        ),
        new ScheduleModel(
            'Dr. Damian Sanchez',
            'Pediatrics',
            'https://example.com/image4.jpg',
            [
                new AvailableSlot(new Date('2024-10-12T08:00:00'), new Date('2024-10-12T09:00:00')),
                new AvailableSlot(new Date('2024-10-12T09:30:00'), new Date('2024-10-12T10:30:00')),
                new AvailableSlot(new Date('2024-10-12T11:00:00'), new Date('2024-10-12T12:00:00')),
            ],
            [
                new Appointment(new Date('2024-10-12'), new Date('2024-10-12T08:00:00'), new Date('2024-10-12T08:30:00'), 'Mia Adams', 'Fracture check'),
                new Appointment(new Date('2024-10-12'), new Date('2024-10-12T09:30:00'), new Date('2024-10-12T10:00:00'), 'James Harris', 'Joint pain evaluation'),
            ]
        ),
        new ScheduleModel(
            'Dr. Chloe Harrington',
            'Dermatology',
            'https://example.com/image5.jpg',
            [],
            [
                new Appointment(new Date('2024-10-12'), new Date('2024-10-12T11:30:00'), new Date('2024-10-12T12:00:00'), 'Isabella Clark', 'Skin allergy consultation'),
                new Appointment(new Date('2024-10-12'), new Date('2024-10-12T13:00:00'), new Date('2024-10-12T13:30:00'), 'Ethan Martinez', 'Routine skin check'),
            ]
        )
    ];

    // Reported Issues
    requests: RequestModel[] = [
        new RequestModel(
            '6d5c7c38-d1e3-4e0e-b5f3-c30c62d27d5c', // ID
            'Cleaning', // Request Type
            'Deep cleaning of the conference room required before the meeting.', // Description
            'open', // Status
            'high', // Priority
            new Date('2024-10-01T08:30:00'), // Created Date
            'John Doe', // Requested By
            undefined, // Updated Date
            'Alice Johnson', // Assigned To
            'Conference Room', // Location
            'Ensure all chairs and tables are arranged properly.' // Notes
        ),
        new RequestModel(
            'f4a0e87c-43c6-429b-bf1c-15e0c2b83c67', // ID
            'Maintenance', // Request Type
            'Repair the air conditioning unit in the server room.', // Description
            'in_progress', // Status
            'high', // Priority
            new Date('2024-10-02T09:00:00'), // Created Date
            'Jane Smith', // Requested By
            new Date('2024-10-05T17:00:00'), // Updated Date
            'Bob Brown', // Assigned To
            'Server Room', // Location
            'The AC has been malfunctioning for a week.' // Notes
        ),
        new RequestModel(
            'd46f02e4-78ae-4623-a0a8-91d7882e1f90', // ID
            'Supply Request', // Request Type
            'Request for additional office supplies including pens, paper, and notebooks.', // Description
            'open', // Status
            'medium', // Priority
            new Date('2024-10-03T10:15:00'), // Created Date
            'Emily Clark', // Requested By
            undefined, // Updated Date
            'Charlie Davis', // Assigned To
            'Main Office', // Location
            'Ensure to check the stock levels before ordering.' // Notes
        ),
        new RequestModel(
            'f6e7e35e-12e3-4a44-b02b-f9c3ebcfd6d7', // ID
            'Maintenance', // Request Type
            'Replace the broken window in the staff lounge.', // Description
            'closed', // Status
            'high', // Priority
            new Date('2024-10-04T11:00:00'), // Created Date
            'Michael Wilson', // Requested By
            new Date('2024-10-10T14:30:00'), // Updated Date
            'Diana Green', // Assigned To
            'Staff Lounge', // Location
            'The window was shattered during the storm.' // Notes
        ),
        new RequestModel(
            '9e37129f-6e51-4b64-8c93-489af4f3bb2d', // ID
            'Cleaning', // Request Type
            'Regular cleaning of the restrooms every Wednesday.', // Description
            'open', // Status
            'low', // Priority
            new Date('2024-10-05T09:30:00'), // Created Date
            'Sarah Lewis', // Requested By
            undefined, // Updated Date
            'Eva White', // Assigned To
            'Restrooms', // Location
            'Routine maintenance request.' // Notes
        )
    ];

    // Recent Activities
    recentActivities: ActivityModel[] = [
        new ActivityModel(
            'daaf68e2-2b47-4e5c-bb3e-0b68f2f7b6e9', // Unique ID
            'user-101', // User ID
            'Logged in', // Action
            new Date('2024-10-11T08:15:30'), // Timestamp
            'completed', // Status
            'User logged in successfully from web.'
        ),
        new ActivityModel(
            'f5e98d07-7d4e-4677-9218-885a4aaedb43', // Unique ID
            'user-102', // User ID
            'Updated profile', // Action
            new Date('2024-10-11T09:05:45'), // Timestamp
            'completed', // Status
            'User updated their email address and phone number.'
        ),
        new ActivityModel(
            'b1d3e92f-df4b-4a3b-bf7b-9b7aa9932f9b', // Unique ID
            'user-103', // User ID
            'Changed password', // Action
            new Date('2024-10-11T10:00:00'), // Timestamp
            'completed', // Status
            'User successfully changed their password.'
        ),
        new ActivityModel(
            'e9b35e4f-6593-41bc-9c1b-f91445aa8d4b', // Unique ID
            'user-101', // User ID
            'Created a new document', // Action
            new Date('2024-10-11T10:30:00'), // Timestamp
            'completed', // Status
            'User created a new document titled "Project Plan".'
        ),
        new ActivityModel(
            'ac8c9b6c-5ed5-4c1c-97a0-ef6cb9b1de99', // Unique ID
            'user-104', // User ID
            'Logged out', // Action
            new Date('2024-10-11T11:00:15'), // Timestamp
            'completed', // Status
            'User logged out successfully.'
        )
    ];

    sideNavItems: MenuItem[] = [
        {
            label: 'Dashboard',
            icon: 'pi pi-th-large',
            routerLink: 'dashboard',
            routerLinkActiveOptions: 'sidebar-nav-link-active',
        },
        {
            label: 'Appointments',
            icon: 'pi pi-check-square',
            routerLink: 'appointment',
            routerLinkActiveOptions: 'sidebar-nav-link-active',
        },
        {
            label: 'Patients',
            icon: 'pi pi-id-card',
            routerLink: 'patient',
            routerLinkActiveOptions: 'sidebar-nav-link-active',
        },
        {
            label: 'Doctors',
            icon: 'pi pi-users',
            routerLink: 'doctor',
            routerLinkActiveOptions: 'sidebar-nav-link-active',
        },
        {
            label: 'Departments',
            icon: 'pi pi-building',
            routerLink: 'department',
            routerLinkActiveOptions: 'sidebar-nav-link-active',
        },
        {
            label: `Doctor's Schedule`,
            icon: 'pi pi-calendar-plus',
            routerLink: 'schedule',
            routerLinkActiveOptions: 'sidebar-nav-link-active',
        },
        {
            label: 'Payments',
            icon: 'pi pi-credit-card',
            routerLink: 'payment',
            routerLinkActiveOptions: 'sidebar-nav-link-active',
        },
        {
            label: 'Inventory',
            icon: 'pi pi-box',
            routerLink: 'inventory',
            routerLinkActiveOptions: 'sidebar-nav-link-active',
        },
        {
            label: 'Messages',
            icon: 'pi pi-comments',
            routerLink: 'message',
            routerLinkActiveOptions: 'sidebar-nav-link-active',
            badge: "7"
        },

    ];

    constructor() {
    }

    getTotalInvoiceStats() {
        const subject = new Subject<any>();

        setTimeout(() => {
            subject.next(this.totalInvoiceStats);
            subject.complete();
        }, 2000);

        return subject.asObservable();
    }

    getTotalPatientStats() {
        const subject = new Subject<any>();

        setTimeout(() => {
            subject.next(this.totalPatientStats);
            subject.complete();
        }, 2000);

        return subject.asObservable();
    }

    getTotalAppointmentStats() {
        const subject = new Subject<any>();

        setTimeout(() => {
            subject.next(this.totalAppointmentStats);
            subject.complete();
        }, 2000);

        return subject.asObservable();
    }

    getTotalBedroomStats() {
        const subject = new Subject<any>();

        setTimeout(() => {
            subject.next(this.totalBedroomStats);
            subject.complete();
        }, 2000);

        return subject.asObservable();
    }

    getPatientOverviewByAgeChart(duration: 'week' | 'month' | 'year') {
        const subject = new Subject<any>();

        setTimeout(() => {
            switch (duration) {
                case 'week': subject.next(this.patientOverviewWeekChart);
                    break;
                case 'month': subject.next(this.patientOverviewMonthChart);
                    break;
                case 'year': subject.next(this.patientOverviewYearChart);
                    break;
            }
            subject.complete();
        }, 2000);

        return subject.asObservable();
    }

    getRevenueChart(duration: 'week' | 'month' | 'year') {
        const subject = new Subject<any>();

        setTimeout(() => {
            switch (duration) {
                case 'week': subject.next(this.revenueWeekChart);
                    break;
                case 'month': subject.next(this.revenueMonthChart);
                    break;
                case 'year': subject.next(this.revenueYearChart);
                    break;
            }
            subject.complete();
        }, 2000);

        return subject.asObservable();
    }

    getPatientOverviewByDeptChart(duration: 'week' | 'month' | 'year') {
        const subject = new Subject<any>();

        setTimeout(() => {
            switch (duration) {
                case 'week': subject.next(this.patientDeptWeekChart);
                    break;
                case 'month': subject.next(this.patientDeptMonthChart);
                    break;
                case 'year': subject.next(this.patientDeptYearChart);
                    break;
            }
            subject.complete();
        }, 2000);

        return subject.asObservable();
    }

    getDoctorSchedules() {
        const subject = new Subject<any>();

        setTimeout(() => {
            subject.next(this.doctorSchedules);
            subject.complete();
        }, 2000);

        return subject.asObservable();
    }

    getReportedRequests() {
        const subject = new Subject<any>();

        setTimeout(() => {
            subject.next(this.requests);
            subject.complete();
        }, 2000);

        return subject.asObservable();
    }

    getRecentActivities() {
        const subject = new Subject<any>();

        setTimeout(() => {
            subject.next(this.recentActivities);
            subject.complete();
        }, 2000);

        return subject.asObservable();
    }

    getSideNavRoutesItems() {
        const subject = new Subject<any>();

        setTimeout(() => {
            subject.next(this.sideNavItems);
            subject.complete();
        }, 500);

        return subject.asObservable();
    }
}
