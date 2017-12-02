import {RawText} from './RawText';

export class Word extends RawText {
    getRawText(): string {  return "\\w";   }
}