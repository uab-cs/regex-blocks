import {Component, OnInit, ViewEncapsulation} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-main',
  templateUrl: './regex.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./regex.component.css']
})
export class RegexComponent implements OnInit {

  selectedChip = null;

  blocks: any[] = [];

  constructor() {
  }

  ngOnInit() {
    $('.chips-initial').material_chip({
      data: [{
        tag: 'Apple',
      }, {
        tag: 'Microsoft',
      }, {
        tag: 'Google',
      }],
    });
  }

  addOr(){
    let data = $('.chips-initial').material_chip('data');
    let blocks = data.map( chip => { return {
      type: 'single',
      text: chip.tag
    } });
    this.blocks.push({
      type: 'or',
      classes: 'orBl',
      children: blocks
    })
  }

  addDigit(){
    this.blocks.push(BlockFactory.create("digit"))
    this.blocks.push({
      type: 'single',
      text: "any digit",
      classes: 'digitChip'
    });
  }
  addWord(){
    this.blocks.push({
      type: 'single',
      text: "any word",
      classes: 'wordChip'
    });
  }
  addWhitespace(){
    this.blocks.push({
      type: 'single',
      text: "whitespace",
      classes: 'whitespaceChip'
    });
  }

  stringInput = "";
  addString(string){
    this.blocks.push({
      type: 'single',
      text: string,
      not: false
    });
    this.stringInput = "";
  }
}
