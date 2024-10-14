import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { HospitalModule } from "./modules/hospital.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from "primeng/api";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HospitalModule,
        BrowserAnimationsModule,
        ToastModule,
    ],
    exports: [
        HospitalModule
    ],
    providers: [
        MessageService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}