import {RawText} from './RawText';

export class Digit extends RawText {
    getRawText(): string {  return "\\d";   }
}