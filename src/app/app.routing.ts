import {MasterComponent} from "./layout/master/master.component";
import {Routes, RouterModule} from "@angular/router";
import {RegexComponent} from "./pages/regex/regex.component";

const routes: Routes = [
    {
        path: '',
        component: MasterComponent,
        children: [
            {
                path: '',
                component: RegexComponent
            }
        ]
    }
];

export const routing = RouterModule.forRoot(routes);

export const routedComponents = [MasterComponent, RegexComponent];
