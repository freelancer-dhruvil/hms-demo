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
    
    // Maps
];

@NgModule({
    declarations: [
        SharedComponents
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
       SharedComponents
    ],
    providers: []
})

export class SharedModule {}