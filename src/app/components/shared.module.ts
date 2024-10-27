import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CardBarChartComponent } from "./cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "./cards/card-line-chart/card-line-chart.component";
import { CardPieChartComponent } from "./cards/card-pie-chart/card-pie-chart.component";
import { CardSettingsComponent } from "./cards/card-settings/card-settings.component";
import { CardStatsComponent } from "./cards/card-stats/card-stats-chart.component";
import { AdminHeaderComponent } from "./headers/admin-header/admin-header.component";
import { AdminFooterComponent } from "./footers/admin-footer/admin-footer.component";
import { UserDropdownComponent } from "./dropdowns/user-dropdown/user-dropdown.component";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { ImageModule } from 'primeng/image';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AdminSidebarComponent } from "./sidebars/admin-sidebar/admin-sidebar.component";
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { BottomBannerComponent } from "./sidebars/bottom-banner/bottom-banner.component";
import { CardModule } from 'primeng/card';
import { MiniCalendarComponent } from "./calendars/mini-calendar/mini-calendar.component";
import { FullCalendarModule } from '@fullcalendar/angular';
import { ChartModule } from 'primeng/chart';
import { CardDoctorScheduleComponent } from './cards/card-doctor-schedule/card-doctor-schedule.component';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CardReprotsComponent } from './cards/card-reports/card-reports.component';
import { CardRecentActivityComponent } from './cards/card-recent-activity/card-recent-activity.component';
import { CommonTableComponent } from './tables/common-table/common-table.component';

const SharedComponents: any[] = [
    // Cards
    CardBarChartComponent,
    CardLineChartComponent,
    CardPieChartComponent,
    CardSettingsComponent,
    CardStatsComponent,
    CardDoctorScheduleComponent,
    CardReprotsComponent,
    MiniCalendarComponent,
    CardRecentActivityComponent,

    // Dropdowns
    UserDropdownComponent,

    // Headers
    AdminHeaderComponent,

    // Footers
    AdminFooterComponent,

    // Navbars

    // Sidebars
    AdminSidebarComponent,
    BottomBannerComponent,
    // Maps

    CommonTableComponent,

];

const SharedModules: any[] = [
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    ImageModule,
    OverlayPanelModule,
    MenuModule,
    TableModule,
    TooltipModule,
    IconFieldModule,
    InputIconModule,
    BreadcrumbModule,
    InputSwitchModule,
    FormsModule,
    BadgeModule,
    AvatarModule,
    AvatarGroupModule,
    SkeletonModule,
    ToastModule,
    CardModule,
    FullCalendarModule,
    ChartModule,
    DataViewModule,
    TagModule,
]

@NgModule({
    declarations: [
        SharedComponents,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModules,
    ],
    exports: [
        SharedComponents,
        SharedModules,
    ],
    providers: []
})

export class SharedModule { }