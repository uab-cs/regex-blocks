import {MasterComponent} from "./layout/master/master.component";
import {Routes, RouterModule} from "@angular/router";
import {MainComponent} from "./pages/main/main.component";

const routes: Routes = [
    {
        path: '',
        component: MasterComponent,
        children: [
            {
                path: '',
                component: MainComponent
            }
        ]
    }
];

export const routing = RouterModule.forRoot(routes);

export const routedComponents = [MasterComponent, MainComponent];
