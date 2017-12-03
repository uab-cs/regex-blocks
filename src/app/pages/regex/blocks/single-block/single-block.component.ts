import {Component, Input, OnInit} from '@angular/core';
import {KleeneStar} from "../../../../models/quantifiers/KleeneStar";

@Component({
  selector: 'single-block',
  templateUrl: './single-block.component.html',
  styleUrls: ['./single-block.component.css']
})
export class SingleBlockComponent implements OnInit {

  @Input('block') block;

  classes;

  constructor() {}

  handleClick(){
    if(this.block.quantifier){
      this.classes = '';
      this.block.quantifier = null;
      return;
    }
    this.block.quantifier = new KleeneStar();
    this.classes = 'quantified';
  }

  ngOnInit() { }

}
