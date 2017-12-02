import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'or-block',
  templateUrl: './or-block.component.html',
  styleUrls: ['./or-block.component.css']
})
export class OrBlockComponent implements OnInit {

  @Input('block') block;

  constructor() { }

  ngOnInit() {
  }

}
