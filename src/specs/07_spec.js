import assert from "power-assert";

const f = "fizz";
const b = "buzz";
const fb = "fizzbuzz";

describe("整数値を1つ引数にとる関数fizzbuzzを次のように実装してください", function () {
  context("引数が 3 の倍数の場合", function () {
    context("しかも 5 の倍数の場合", function () {
      it("fizzbuzz という文字列を返す", function () {
        assert(fizzbuzz(60) === fb);
      });
    })
    context("5の倍数ではない場合", function () {
      it("fizz という文字列を返す", function () {
        assert(fizzbuzz(21) === f);
      });
    });
  });
  context("引数が 5 の倍数の場合", function () {
    it("buzz という文字列を返す", function () {
      assert(fizzbuzz(20) === b);
    });
  });
  context("上記のどれにも当てはまらない場合", function () {
    it("引数の数値を返す", function () {
      assert(fizzbuzz(1) === 1);
    });
  });
});
