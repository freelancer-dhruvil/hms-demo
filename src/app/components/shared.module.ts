import { NgModule} from "@angular/core";
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

const SharedComponents: any[] = [
    // Cards
    CardBarChartComponent,
    CardLineChartComponent,
    CardPieChartComponent,
    CardSettingsComponent,
    CardStatsComponent,

    // Dropdowns
    UserDropdownComponent,

    // Headers
    AdminHeaderComponent,

    // Footers
    AdminFooterComponent,

    // Navbars

    // Sidebars
    AdminSidebarComponent
    
    // Maps
];

@NgModule({
    declarations: [
        SharedComponents
    ],
    imports: [
        CommonModule,
        RouterModule,
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
    ],
    exports: [
       SharedComponents
    ],
    providers: []
})

export class SharedModule {}