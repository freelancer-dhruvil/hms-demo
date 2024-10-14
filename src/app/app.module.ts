import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { HospitalModule } from "./modules/hospital.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HospitalModule,
        BrowserAnimationsModule,
    ],
    exports: [
        HospitalModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}