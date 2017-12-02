import {RegexBlock as RegexBlock} from '../RegexBlock';
import {Quantifier} from '../Quantifier';


export class Expression extends RegexBlock {

    public constructor(public children : RegexBlock[] = [], public quantifier : Quantifier = null) {  super();    }

    public addChild(child : RegexBlock) {
        this.children.push(child);
    }

    public render(): string {
        let result = "";
        for (let child of this.children){
            result += child.render();
        }
        if (this.shouldGroup(result)) {
            return Expression.group(result);
        }
        return result;
    }

    /**
     * Surround input with a non-capture group,
     *  if it is multiple characters long
     * @param {string} text
     * @returns {string}
     */
    public static group(text : string) : string {
        if (Expression.isMultiChar(text)) {
            return "(?:" + text + ")";
        }
        return text;
    }

    private static isMultiChar(text : string) {
        return !text.match(/^(?:\\?.|\[.*\]|\(.*\))$/);
    }

    private shouldGroup(text: string) {
        let isMulti = Expression.isMultiChar(text);
        if (this.quantifier === null) {
            return isMulti && this.children.length > 1;
        }
        return isMulti;
    }
}