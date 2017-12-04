import {Expression} from './Expression';
import {Quantifier} from '../Quantifier';

export class Text extends Expression {

    public constructor(public text : string, public quantifier : Quantifier = null) {     super(quantifier);    }

    getType(): string { return "single"; }

    getText() : string { return this.text;  }

    shouldEscape() : boolean { return true; }

    render(): string {
        let result = this.getText();
        if (this.shouldEscape()) {
            result = Text.escape(result);
        }
        result = this.group(result);
        if (this.quantifier !== null) {
            result += this.quantifier.render();
        }
        return result;
    }

    protected shouldGroup (text : string) : boolean {
        return this.quantifier !== null && Text.isMultiChar(text);
    }

    static escape(input : string) : string {
        return input.replace(/([-\/\\^$*+?:.()|[\]{}])/g, '\\$1');
    }
}