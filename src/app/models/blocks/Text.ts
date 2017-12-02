import {RegexBlock} from '../RegexBlock';

export class Text extends RegexBlock {

    public constructor(public text : string) {     super();    }

    getType(): string { return "single"; }

    getText() : string { return this.text;  }

    shouldEscape() : boolean { return true; }

    render(): string {
        if (this.shouldEscape()) {
            return Text.escape(this.getText());
        }
        return this.getText();
    }

    static escape(input : string) : string {
        //TODO
        return input;
    }
}