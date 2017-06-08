import assert from "power-assert";

describe("数値を要素とする配列を1つ引数にとる関数sumを、次のように定義してください", function () {
  it("各要素の総和を返します。例えば[1, 2, 3]が与えられた場合、6を返します", function () {
    const list = [-1, 3, 45, 108, -985];
    const expected = list.reduce((i, j) => i + j);
    assert(sum(list) == expected);
  })
});

describe("数値を要素とする配列を1つ引数に取る関数をmaxを、次のように定義してください", function () {
  it("最も大きい要素を返します。例えば[1, 2, 3, 2, 1]が与えられた場合、3を返します", function () {
    const list = [0, -1, -2008, 4708081, 4080820, 1878708];
    const expected = Math.max.apply(null, list);
    assert(max(list) == expected);
  });
});

describe("2つの引数を取る関数indexOfを定義してください。なお第1引数は数値のみを要素とする配列、第2引数は数値とします。この関数は第2引数に指定された数値を、第1引数に指定された配列の中から探します", function () {
  context("見つかった場合", function () {
    it("最初に見つけた要素の添え字を返ります。例えば[1, 2, 3, 2, 1]から2を探す場合、1が返ります", function () {
      const list = [708, 1080, 178, 7676, 12, 1278];
      const target = 178;
      const expected = list.indexOf(target);
      assert(indexOf(list, target) == expected);
    })
  });
  context("見つからなかった場合", function () {
    it("-1が返ります", function () {
      const list = [708, 1080, 178, 7676, 12, 1278];
      const target = 1;
      const expected = list.indexOf(target);
      assert(indexOf(list, target) == expected);
    })
  });
});

describe("数値のみを要素とする配列があります。この配列を複数要素にもつ配列を引数とする関数richmanを、次のように定義してください", function () {
  it("各要素の総和を計算して、最も大きいものの添え字を返します", function () {
    const list = [
      [0],
      [100, 200, 300, 400],
      [10000, 1, 2, 3, 4, 5, 6, 7],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [100, 200, 300, 400],
      [100, 200, 300, 400],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ];
    const s = list => list.reduce((i, j) => i + j);
    const f = list => list.indexOf(Math.max.apply(null, list));
    const expected = f(list.map(s));
    assert(richman(list) == expected);
  });
});