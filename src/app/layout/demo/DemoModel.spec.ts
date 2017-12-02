
import {DemoModel} from "./DemoModel";

describe("Demo test case", () => {

  let stringBlock = new DemoModel( 'abc' );

  it("should run the test", () => {
    expect(stringBlock.render()).toEqual('abc');
  });

});
