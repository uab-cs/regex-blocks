import {Text} from './Text';

export abstract class RawText extends Text {

    abstract getRawText() : string;

    getText() : string { return this.getRawText(); }

    shouldEscape() : boolean { return false; }
}