import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { InMemoryCache } from "@apollo/client/core";

import { environment } from "../../environments/environment";

import { HospitalRouteComponentsArray, HospitalRoutingModule } from "./hospital.routes";
import { SharedModule } from "../components/shared.module";
import { StaticDataService } from "../services/data.service";


@NgModule({
    declarations: [
      HospitalRouteComponentsArray
    ],
    imports: [
      CommonModule,
      FormsModule,
      BrowserModule,
      ApolloModule,
      HttpClientModule,
      HospitalRoutingModule,
      SharedModule
    ],
    exports: [
      HospitalRouteComponentsArray,
      SharedModule
    ],
    providers: [
      StaticDataService, // TODELETE
      {
        provide: APOLLO_OPTIONS,
        useFactory: (httpLink: HttpLink) => {
          return {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: environment.API_GATEWAY
            })
          };
        },
        deps: [HttpLink]
      }
    ]
})

export class HospitalModule { }