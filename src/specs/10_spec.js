import assert from "power-assert";

describe("2つの正の整数の最大公倍数を返す関数gcdを、次のように定義してください", function () {
  context("gcd(1, 1) の場合", function () {
    it("1を返します", function () {
      assert(gcd(1, 1) == 1);
    });
  });
  context("片方の引数が 1 の場合", function () {
    it("1を返します", function () {
      assert(gcd(1, 130) == 1);
    });
  });
  context("2つの引数が同じ数の場合", function () {
    it("その数を返します", function () {
      assert(gcd(130, 130) == 130);
    });
  });
  context("それ以外の場合", function () {
    it("２つの数の最大公約数を返します", function () {
      assert(gcd(12, 16) == 4);
    })
  });
});

describe("引数に指定された数値が素数であることを判定する関数、isPrimeNumberを次のように定義してください", function () {
  context("引数が0の場合", function () {
    it("falseを返します", function () {
      const target = 0;
      const expected = false;
      assert(isPrimeNumber(target) == expected);
    });
  });
  context("引数が1の場合", function () {
    it("falseを返します", function () {
      const target = 1;
      const expected = false;
      assert(isPrimeNumber(target) == expected);
    });
  });
  context("引数が素数の場合", function () {
    it("trueを返します", function () {
      const target = 499;
      const expected = true;
      assert(isPrimeNumber(target) == expected);
    });
  });
  context("上記以外の場合", function () {
    it("falseを返します", function () {
      const target = 500;
      const expected = false;
      assert(isPrimeNumber(target) == expected);
    });
  });
});