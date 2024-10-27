import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../../../services/data.service';
import { CardStatsModel } from '../../../models/card.model';
import { ChartModel } from '../../../models/chart.model';
import { ScheduleModel } from '../../../models/schedule.model';
import { RequestModel } from '../../../models/request.model';
import { ActivityModel } from '../../../models/activity.model';
import { AppointmentModel } from '../../../models/appointment.model';

@Component({
  selector: 'app-hospital-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: "./dashboard.component.scss"
})
export class HospitalDashboardComponent implements OnInit {

  invoiceStats: CardStatsModel;
  patientStats: CardStatsModel;
  appointmentStats: CardStatsModel;
  bedroomStats: CardStatsModel;

  patientOverviewByAge: ChartModel;
  revenueOverview: ChartModel;
  patientOverviewByDept: ChartModel;

  doctorSchedules: ScheduleModel[];
  reportedRequests: RequestModel[];
  recentActivities: ActivityModel[];
  appointmentsList: AppointmentModel[];

  public sideCalendarDate: Date;

  constructor(private hospitalService: StaticDataService) {}

  ngOnInit() {
    this.getTotalInvoiceStats();
    this.getTotalPatientStats();
    this.getTotalAppointmentStats();
    this.getTotalBedroomStats();

    this.getPatientOverviewByAge('week');
    this.getRevenueOverview('week');
    this.getPatientOverviewByDept('week');

    this.getDoctorSchedules();
    this.getReportedRequests();
    this.getRecentActivities();

    const today = new Date();
    this.getAppointmentsList(today);
  }

  getTotalInvoiceStats() {
    this.hospitalService.getTotalInvoiceStats()
      .subscribe((data: CardStatsModel) => {
        this.invoiceStats = data;
        console.log(this.invoiceStats);
    });
  }

  getTotalPatientStats() {
    this.hospitalService.getTotalPatientStats()
      .subscribe((data: CardStatsModel) => {
        this.patientStats = data;
        console.log(this.patientStats);
    });
  }

  getTotalAppointmentStats() {
    this.hospitalService.getTotalAppointmentStats()
      .subscribe((data: CardStatsModel) => {
        this.appointmentStats = data;
        console.log(this.appointmentStats);
    });
  }

  getTotalBedroomStats() {
    this.hospitalService.getTotalBedroomStats()
      .subscribe((data: CardStatsModel) => {
        this.bedroomStats = data;
        console.log(this.bedroomStats);
    });
  }

  getPatientOverviewByAge(duration: 'week' | 'month' | 'year') {
    (<any>this.patientOverviewByAge) = undefined;
    this.hospitalService.getPatientOverviewByAgeChart(duration)
      .subscribe((data: ChartModel) => {
        this.patientOverviewByAge = data;
        // console.log(this.patientOverviewByAge);
    });
  }

  getRevenueOverview(duration: 'week' | 'month' | 'year') {
    (<any>this.revenueOverview) = undefined;
    this.hospitalService.getRevenueChart(duration)
      .subscribe((data: ChartModel) => {
        this.revenueOverview = data;
        // console.log(this.revenueOverview);
    });
  }

  getPatientOverviewByDept(duration: 'week' | 'month' | 'year') {
    (<any>this.patientOverviewByAge) = undefined;
    this.hospitalService.getPatientOverviewByDeptChart(duration)
      .subscribe((data: ChartModel) => {
        this.patientOverviewByDept = data;
        // console.log(this.patientOverviewByDept);
    });
  }

  getDoctorSchedules() {
    this.hospitalService.getDoctorSchedules()
      .subscribe((data: ScheduleModel[]) => {
        this.doctorSchedules = data;
        // console.log(this.doctorSchedules);
    });
  }

  getReportedRequests() {
    this.hospitalService.getReportedRequests()
      .subscribe((data: RequestModel[]) => {
        this.reportedRequests = data;
        // console.log(this.reportedRequests);
    });
  }

  getRecentActivities() {
    (<any>this.recentActivities) = undefined;
    this.hospitalService.getRecentActivities()
      .subscribe((data: ActivityModel[]) => {
        this.recentActivities = data;
        // console.log(this.recentActivities);
    });
  }

  getAppointmentsList(date: Date) { // date to be passed for which appointments need to be fetched
    const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    const endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
    
    this.hospitalService.getAppointmentsList(startOfDay, endOfDay)
      .subscribe((data: AppointmentModel[]) => {
        this.appointmentsList = data;
        console.log(this.appointmentsList);
    });
  }
}

