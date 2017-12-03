import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Text} from '../../models/blocks/Text';
import {Expression} from '../../models/blocks/Expression';
import {OrBlock} from '../../models/blocks/OrBlock';
import {Word} from '../../models/blocks/Word';
import {Whitespace} from '../../models/blocks/Whitespace';
import {Digit} from '../../models/blocks/Digit';

declare let $: any;
declare let Materialize: any;

@Component({
  selector: 'app-main',
  templateUrl: './regex.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./regex.component.css']
})
export class RegexComponent implements OnInit {

  selectedChip = null;

  expression: Expression = new Expression();
  regex: string = "";

  constructor() {}

  ngOnInit() {
    $('.chips-initial').material_chip({
      data: [],
    });
  }

  addOr(){
      let data = $('.chips-initial').material_chip('data');
      let blocks = data.map( chip => {
          return new Text(chip.tag);
      });
      this.expression.addChild( new OrBlock(blocks) );
      console.log(this.expression);
  }

  addDigit(){
    this.expression.addChild(new Digit("any digit"));
    // this.blocks.push({
    //   type: 'single',
    //   text: "any digit",
    //   classes: 'digitChip'
    // });
  }

  addWord(){
    this.expression.addChild(new Word("any word"));
    // this.blocks.push({
    //   type: 'single',
    //   text: "any word",
    //   classes: 'wordChip'
    // });
  }
  addWhitespace(){
    this.expression.addChild(new Whitespace("whitespace"));
  }

  stringInput = "";
  addString(string){
    let block = new Text(string);
    this.expression.addChild(block);
    this.stringInput = "";
  }

  testStrings: string[] = [];
  highlight(str: string){
    if(!this.regex) return str;
    let compiled = new RegExp(this.regex, 'gi');
    console.log(compiled);
    return str.replace(compiled, match => {
      return '<span class="highlightText">' + match + '</span>';
    });
  }

  testStringField = "";
  addTestString(){
    if(this.testStringField)
      this.testStrings.push(this.testStringField);
    this.testStringField = "";
  }

  generate(){
    this.regex = this.expression.render();
    console.log(this.expression);
    Materialize.toast('Generated Regex!', 4000)
  }
}
