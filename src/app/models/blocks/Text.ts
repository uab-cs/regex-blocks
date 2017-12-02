import {RegexBlock} from '../RegexBlock';

export class Text extends RegexBlock {

    public constructor(public text : string) {     super();    }

    render(): string {
        return Text.escape(this.text);
    }

    static escape(input : string) : string {
        //TODO
        return input;
    }
}