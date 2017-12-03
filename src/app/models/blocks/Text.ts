import {Expression} from './Expression';
import {Quantifier} from '../Quantifier';

export class Text extends Expression {

    public constructor(public text : string, public quantifier : Quantifier = null) {     super(quantifier);    }

    getType(): string { return "single"; }

    getText() : string { return this.text;  }

    shouldEscape() : boolean { return true; }

    render(): string {
        if (this.shouldEscape()) {
            return Text.escape(this.getText());
        }
        let result = this.group(this.getText());
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