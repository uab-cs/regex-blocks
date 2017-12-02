import {Expression} from './Expression';

export class OrBlock extends Expression {
    public classes = "orBl";

    public getType() {  return "or";  }

    protected concatenate() : string {
        let result = [];
        for (let child of this.children) {
            result.push(child.render());
        }
        return result.join('|');
    }
}