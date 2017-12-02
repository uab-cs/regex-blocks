import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Text} from '../../models/blocks/Text';
import {Expression} from '../../models/blocks/Expression';
import {OrBlock} from '../../models/blocks/OrBlock';
import {Word} from '../../models/blocks/Word';
import {Whitespace} from '../../models/blocks/Whitespace';

declare let $: any;

@Component({
  selector: 'app-main',
  templateUrl: './regex.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./regex.component.css']
})
export class RegexComponent implements OnInit {

  selectedChip = null;

  expression: Expression = new Expression();

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

    //   let blocks = data.map( chip => { return {
    //   type: 'single',
    //   text: chip.tag
    // } });
    // this.blocks.push({
    //   type: 'or',
    //   classes: 'orBl',
    //   children: blocks
    // })
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
    // this.blocks.push({
    //   type: 'single',
    //   text: "whitespace",
    //   classes: 'whitespaceChip'
    // });
  }

  stringInput = "";
  addString(string){
    let block = new Text(string);
    this.expression.addChild(block);
    this.stringInput = "";
  }

  testStrings: string[] = [];
  highlight(str: string, regex: string){
    if(!regex) return str;
    return str.replace(new RegExp(regex, "gi"), match => {
      return '<span class="highlightText">' + match + '</span>';
    });
  }

  testStringField = "";
  addTestString(){
    if(this.testStringField)
      this.testStrings.push(this.testStringField);
    this.testStringField = "";
  }
}
