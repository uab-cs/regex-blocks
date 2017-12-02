import {Renderable} from './Renderable';

export abstract class Quantifier implements Renderable {
    abstract render(): string;
}