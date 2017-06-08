import assert from "power-assert";

describe("次のように関数cm2mを定義してください。なお引数は全て数値が指定されるとして実装してください", function () {
  context("第1引数がの値が0以上の場合", function () {
    it("この関数はcm単位の数値をm単位に変換します", function () {
      const inCM = 183.5;
      const inM = 1.835;
      assert(cm2m(inCM) == inM);
    })
  });
  context("第1引数の値が0未満の場合", function () {
    it("0を返す", function () {
      assert(cm2m(-1.5) == 0);
    })
  });
});

describe("第1引数の身長と第2引数の体重からBMIを計算する関数bmiを定義してください。身長はcm単位の数値、体重はkg単位の数値が指定されるとして実装してください", function () {
  context("第1、第2引数のどちらかが0以下の場合", function () {
    it("0を返す", function () {
      const zero = 0;
      const h = 174;
      const w = 76;
      const expected = 0;
      assert(bmi(zero, zero) == zero);
      assert(bmi(zero, w) == zero);
      assert(bmi(h, zero) === zero);
      assert(bmi(h * -1, w) == zero);
      assert(bmi(h, w * - 1) == zero);
      assert(bmi(h * -1, w * -1) == zero);
    })
  })
  context("上記以外の場合", function () {
    it("定義に従ってBMIを計算します", function () {
      const height = 174;
      const weight = 76;
      const expected = weight / Math.pow(height / 100, 2);
      assert(bmi(height, weight) == expected);
    })
  });
})