import {Text} from './Text';
import {Expression} from './Expression';

describe("Expression should ", () => {
    let text1 = new Text("hello, world!");
    let text2 = new Text("indeed");

    let expression1 = new Expression(null, [text1]);
    let expression2 = new Expression(null, [text1, text2]);

    it('render one child without a non-capture group', () => {
        expect(expression1.render()).toEqual('hello, world!');
    });

    it('render two children with a non-capture group', () => {
        expect(expression2.render()).toEqual("(?:hello, world!indeed)");
    });

    it('render sub-components nicely', () => {

    });


    it ('correctly group text if necessary', () => {
        let groupingTests = {
            'a' : 'a',
            '\\.' : '\\.',
            '[abc]' : '[abc]',
            '(abc)' : '(abc)',
            '((yes{2,})+)' : '((yes{2,})+)',

            'yes' : '(?:yes)',
            '(yes{2,})+' : '(?:(yes{2,})+)'
        }
        for (let input in groupingTests) {
            let expected = groupingTests[input];
            expect(Expression.group(input)).toEqual(expected);
        }
    });
});