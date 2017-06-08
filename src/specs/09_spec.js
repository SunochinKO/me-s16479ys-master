import assert from "power-assert";

describe("引数に指定された年がうるう年であることを判定する関数isLeapYearを定義してください。なおこの関数は、うるう年の時はtrue、そうでない時はfalseを返します", function () {
  context("引数に指定された年が0より小さい場合", function () {
    it("falseを返します", function () {
      const years = [-5, -20, -400, -100];
      const expected = false;
      for (const year of years) {
        assert(isLeapYear(year) == expected)
      }
    });
  })
  context("引数に指定された年が0以上の場合", function () {
    context("引数に指定された年が、4で割り切れるが 100 で割り切れない場合", function () {
      it("trueを返します", function () {
        assert(isLeapYear(1996) == true);
        assert(isLeapYear(2004) == true);
      });
    });
    context("引数に指定された年が、4で割り切れ、しかも 100 で割り切れるが、400 では割り切れない場合", function () {
      it("falseを返します", function () {
        assert(isLeapYear(1900) == false);
      });
    });
    context("引数に指定された年が、4で割り切れ、しかも 400 で割り切れる場合", function () {
      it("trueを返します", function () {
        assert(isLeapYear(1600) == true);
        assert(isLeapYear(2000) == true);
      });
    });
    context("上記以外の場合", function () {
      it("falseを返します", function () {
        assert(isLeapYear(2015) == false);
      });
    });
  });
});