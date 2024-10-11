import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../../../services/data.service';
import { CardStatsModel } from '../../../models/card.model';
import { ChartModel } from '../../../models/chart.model';
import { ScheduleModel } from '../../../models/schedule.model';
import { RequestModel } from '../../../models/request.model';
import { ActivityModel } from '../../../models/activity.model';

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
    this.hospitalService.getPatientOverviewByAgeChart(duration)
      .subscribe((data: ChartModel) => {
        this.patientOverviewByAge = data;
        console.log(this.patientOverviewByAge);
    });
  }

  getRevenueOverview(duration: 'week' | 'month' | 'year') {
    this.hospitalService.getRevenueChart(duration)
      .subscribe((data: ChartModel) => {
        this.revenueOverview = data;
        console.log(this.revenueOverview);
    });
  }

  getPatientOverviewByDept(duration: 'week' | 'month' | 'year') {
    this.hospitalService.getPatientOverviewByDeptChart(duration)
      .subscribe((data: ChartModel) => {
        this.patientOverviewByDept = data;
        console.log(this.patientOverviewByDept);
    });
  }

  getDoctorSchedules() {
    this.hospitalService.getDoctorSchedules()
      .subscribe((data: ScheduleModel[]) => {
        this.doctorSchedules = data;
        console.log(this.doctorSchedules);
    });
  }

  getReportedRequests() {
    this.hospitalService.getReportedRequests()
      .subscribe((data: RequestModel[]) => {
        this.reportedRequests = data;
        console.log(this.reportedRequests);
    });
  }

  getRecentActivities() {
    this.hospitalService.getRecentActivities()
      .subscribe((data: ActivityModel[]) => {
        this.recentActivities = data;
        console.log(this.recentActivities);
    });
  }
}

