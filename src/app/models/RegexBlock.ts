import {Renderable} from './Renderable';

export abstract class RegexBlock implements Renderable {
    abstract render(): string;
}
