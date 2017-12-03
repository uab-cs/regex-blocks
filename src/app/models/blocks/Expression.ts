import {RegexBlock as RegexBlock} from '../RegexBlock';
import {Quantifier} from '../Quantifier';


export class Expression extends RegexBlock {
    getType(): string { return "expression"; }

    protected groupingOverride = false;

    public groupOverride (override : boolean = false) {
        this.groupingOverride = override;
    }

    public constructor(public quantifier : Quantifier = null, public children : RegexBlock[] = []) {  super();    }

    public addChild(child : RegexBlock) {
        this.children.push(child);
        this.notify();
    }

    public render(): string {
        let result = this.concatenate();
        return this.group(result);
    }

    listeners = [];
    public subscribe( cb ){
      this.listeners.push(cb);
    }
    public notify(){
      this.listeners.forEach( cb => cb() );
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

    protected shouldGroup(text : string) : boolean {
        let isMulti = Expression.isMultiChar(text);
        if (this.quantifier === null) {
            if (this.groupingOverride) {
                return false;
            }
            return isMulti && this.children.length > 1;
        }
        return isMulti;
    }

    protected concatenate() : string {
        let result = "";
        for (let child of this.children){
            result += child.render();
        }
        return result;
    }

    protected group(text : string) : string {
        if (this.shouldGroup(text)) {
            return Expression.group(text);
        }
        return text;
    }

    protected static isMultiChar(text : string) {
        return !text.match(/^(?:\\?.|\[.*\]|\(.*\))$/);
    }
}
