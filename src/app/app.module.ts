import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MasterComponent} from './layout/master/master.component';
import {routedComponents, routing} from "./app.routing";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {MaterializeModule} from "angular2-materialize";

@NgModule({
    declarations: [
        AppComponent,
        MasterComponent,
        routedComponents,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MaterializeModule,
        routing
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
