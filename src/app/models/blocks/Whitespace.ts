import {RawText} from './RawText';

export class Whitespace extends RawText {
    getRawText(): string {  return "\\s";   }
}