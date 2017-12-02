import {Text} from './Text';

describe("Text should ", () => {
    let text1 = new Text("hello");
    let text2 = new Text(".escapemeplease");

    it('render itself simply', function () {
        expect(text1.render()).toEqual('hello');
    });

    it('escape reserved characters', function () {
        expect(text2.render()).toEqual('\\.escapemeplease');
    });
});