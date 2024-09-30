import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


const SharedComponents: any[] = [
    // Cards

    // Dropdowns

    // Headers

    // Footers

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