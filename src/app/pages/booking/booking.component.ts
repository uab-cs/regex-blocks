import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    encapsulation: ViewEncapsulation.None
})
export class BookingComponent implements OnInit {

    market;
    user;
    date;

    constructor() { }

    onUserSelect(user){
        this.user = user;
        console.log("User Selected", user);
    }

    onUserDeselect(){
        this.user = null;
        console.log("User Deselected");
    }

    onMarketSelect(market){
        this.market = market;
        console.log("market selected", market);
    }

    onDateSelect(){
        console.log("date selected", this.date);
    }

    ngOnInit() {
    }

}
