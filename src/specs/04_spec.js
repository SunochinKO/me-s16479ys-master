import assert from "power-assert";

describe("2つの引数をもつ関数xorを次のように定義してください", function () {
  context("引数がともに true の場合", function () {
    it("false を返す", function () {
      assert(!xor(true, true));
    });
  });

  context("引数がともに false の場合", function () {
    it("false を返す", function () {
      assert(!xor(false, false));
    });
  });

  context("引数のどちらか一方が true の場合", function () {
    it("true を返す", function () {
      assert(xor(false, true));
      assert(xor(true, false));
    });
  });

});
