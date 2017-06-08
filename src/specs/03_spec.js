import assert from "power-assert";

describe("1つの数値を引数とする関数classifyを次のように実装してください", function () {

  context("引数が0以上の数値の場合", function () {
    context("末尾の数字が7の整数が与えられた場合", function () {

      it("1を返します", function () {
        const value = 137;
        const expected = 1;
        assert(classify(value) == expected);
      })
    });
    context("それ以外の場合", function () {
      it("-1を返します", function () {
        const value = 130;
        const expected = -1;
        assert(classify(value) == expected);
      })
    });
  });

  context("引数が0未満の数値の場合", function () {
    context("末尾の数字が7の整数が与えられた場合", function () {
      it("3を返します", function () {
        const value = -137;
        const expected = 3;
        assert(classify(value) == expected);
      })
    });
    context("それ以外の場合", function () {
      it("-1を返します", function () {
        const value = -130;
        const expected = -1;
        assert(classify(value) == expected);
      })
    });
  });

});