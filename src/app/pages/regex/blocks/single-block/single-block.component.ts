import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'single-block',
  templateUrl: './single-block.component.html',
  styleUrls: ['./single-block.component.css']
})
export class SingleBlockComponent implements OnInit {

  @Input('block') block;

  classes = '';

  constructor() {}

  handleClick(){

  }

  ngOnInit() { }

}
