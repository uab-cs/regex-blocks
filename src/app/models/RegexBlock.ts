import {Renderable} from './Renderable';

export abstract class RegexBlock implements Renderable {
    abstract render(): string;
    abstract getType() : string;

    public constructor() {
        this.type = this.getType();
    }

    public type;
}
