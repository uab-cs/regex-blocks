import {Component, Input, OnInit} from '@angular/core';
import {KleeneStar} from "../../../../models/quantifiers/KleeneStar";
import {KleenePlus} from "../../../../models/quantifiers/KleenePlus";
import {Optional} from "../../../../models/quantifiers/Optional";

@Component({
  selector: 'single-block',
  templateUrl: './single-block.component.html',
  styleUrls: ['./single-block.component.css']
})
export class SingleBlockComponent implements OnInit {

  @Input('block') block;

  classes;

  toggle = [ null, new KleenePlus(), new KleeneStar(), new Optional() ];
  toggle_classes = [ '', 'kplus', 'kstar', 'koption' ];
  toggle_idx = 0;

  constructor() {}

  handleClick(){
    this.toggle_idx++;
    this.block.quantifier = this.toggle[this.toggle_idx % this.toggle.length ];
    this.classes = this.toggle_classes[this.toggle_idx % this.toggle_classes.length];
  }

  ngOnInit() { }

}
