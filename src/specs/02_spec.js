import assert from "power-assert";

const n1 = 12345;
const n2 = 65432;
const r1 = 3.14;
const r2 = 1.41;

describe("2つの数値の和を計算する関数plusを定義してください", function () {
  it("第1引数と第2引数の和を返す", function () {
    assert(plus(n1, n2) == n1 + n2);
    assert(plus(r1, r2) == r1 + r2);
  });
});

describe("2つの数値の差を計算する関数minusを定義してください", function () {
  it("第1引数と第2引数の差を返す", function () {
    assert(minus(n1, n2) == n1 - n2);
    assert(minus(r1, r2) == r1 - r2);
  });
});

describe("2つの数値の積を計算する関数timesを定義してください", function () {
  it("第1引数と第2引数の積を返す", function () {
    assert(times(n1, n2) == n1 * n2);
    assert(times(r1, r2) == r1 * r2);
  });
});

describe("第1引数と第2引数の商を計算する関数divを定義してください", function () {
  context("第2引数が0の場合", function () {
    it("NaNを返す", function () {
      assert(Number.isNaN(div(n1, 0)));
    })
  })
  context("それ以外の場合", function () {
    it("第1引数と第2引数の商を返す", function () {
      assert(div(n1, n2) == n1 / n2);
      assert(div(r1, r2) == r1 / r2);
    });
  });
});

describe("第1引数と第2引数の剰余を計算する関数modを定義してください", function () {
  it("第1引数と第2引数の剰余を返す", function () {
    assert(mod(n1, n2) == n1 % n2);
    assert(mod(r1, r2) == r1 % r2);
  });
});