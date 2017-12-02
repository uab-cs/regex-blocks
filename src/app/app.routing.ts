import {MasterComponent} from "./layout/master/master.component";
import {Routes, RouterModule} from "@angular/router";
import {BookingComponent} from "./pages/booking/booking.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/booking',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: MasterComponent,
        children: [
            {
                path: 'booking',
                component: BookingComponent
            }
        ]
    }
];

export const routing = RouterModule.forRoot(routes);

export const routedComponents = [MasterComponent, BookingComponent];
