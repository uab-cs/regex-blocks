import {Expression} from './Expression';
import {Quantifier} from '../Quantifier';

export class Text extends Expression {

    public constructor(public text : string, public quantifier : Quantifier = null) {     super(quantifier);    }

    getType(): string { return "single"; }

    getText() : string { return this.text;  }

    shouldEscape() : boolean { return true; }

    render(): string {
        let result = "";
        if (this.shouldEscape()) {
            result = Text.escape(this.getText());
        }
        result = this.group(this.getText());
        if (this.quantifier !== null) {
            result += this.quantifier.render();
        }
        return result;
    }

    protected shouldGroup (text : string) : boolean {
        return this.quantifier !== null && Text.isMultiChar(text);
    }

    static escape(input : string) : string {
        //TODO
        return input;
    }
}