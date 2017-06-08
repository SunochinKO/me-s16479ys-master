import assert from "power-assert";

describe("次のように関数idを定義してください", function () {
  it("この関数は引数に指定された値を、そのまま返します", function () {
    const num = 10;
    const bool = false;
    const text = "Hello, world!";

    assert(id(num) == num);
    assert(id(bool) == false);
    assert(id(text) === text);
  });
});