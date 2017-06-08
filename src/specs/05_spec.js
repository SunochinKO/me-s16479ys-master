import assert from "power-assert";

describe("引数に指定された整数の桁数を返すdigitsを実装してください", function () {
  context("引数に0以上の数が指定された場合", function () {
    it("引数に指定された数値の桁数を返します", function () {
      const number = 1234;
      const d = 4;
      assert(digits(number) == d);
    });
  });
  context("引数に負の数が指定された場合", function () {
    it("引数に指定された数値の桁数を返します", function () {
      const number = -41231234;
      const d = 8;
      assert(digits(number) == d);
    });
  });
});

describe("数値のみを要素とする配列を引数にとる関数digitsListを次のように定義してください", function () {
  it("各要素について桁数を調べ、得られた値を要素とする配列を返します。例：[1, 10, 100] -> [1, 2, 3]", function () {
    const list = [17839, 1, 7779, 39, 0];
    const expectations = [5, 1, 4, 2, 1];
    const answer = digitsList(list);
    list.map((i, j) => answer[j] == expectations[j])
      .reduce((i, j) => i && j);
    assert(answer);
  });
});