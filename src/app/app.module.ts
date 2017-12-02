import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MasterComponent} from './layout/master/master.component';
import {routedComponents, routing} from "./app.routing";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {MaterializeModule} from "angular2-materialize";
import { OrBlockComponent } from './pages/regex/blocks/or-block/or-block.component';
import { SingleBlockComponent } from './pages/regex/blocks/single-block/single-block.component';

@NgModule({
    declarations: [
        AppComponent,
        MasterComponent,
        routedComponents,
        OrBlockComponent,
        SingleBlockComponent
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
