import {Text} from './Text';
import {Word} from './Word';
import {KleeneStar} from '../quantifiers/KleeneStar';

describe("Text should ", () => {
    let text1 = new Text("hello");
    let text2 = new Text(`(?:\\w|.)+@[a-z]+\\.(?:com|net|org)`);
    let text3 = new Word("imma word", new KleeneStar());
    let text4 = new Text("imma word", new KleeneStar());

    it('render itself simply', function () {
        expect(text1.render()).toEqual('hello');
    });

    it('escape reserved characters', function () {
        expect(text2.render()).toEqual(`\\(\\?\\:\\\\w\\|\\.\\)\\+@\\[a\\-z\\]\\+\\\\\\.\\(\\?\\:com\\|net\\|org\\)`);
    });

    it('apply quantifier', () => {
        expect(text3.render()).toEqual('\\w*');
        expect(text4.render()).toEqual('(?:imma word)*');
    });
});