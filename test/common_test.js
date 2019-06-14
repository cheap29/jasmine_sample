//http://viewpoint-nk.github.io/blog/jasmine/jasmine-basic.html

// メソッド 内容
// expect(foo).toBe(1); --- foo === 1 であるか
// expect(foo).toEqual(1); --- 文字列が正規表現にマッチするか
// expect(foo).toMatch(/^[a-z]+$/); --- foo === 1 であるか
// expect(element).toExist(); --- 要素が存在するか
// expect(foo.func).toBeDefined(); --- 変数が定義済みか
// expect(foo.func).toBeUndefined(); --- 変数が未定義か
// expect(foo).toBeNull(); --- 変数がnullか
// expect(foo).toBeTruthy(); --- 変数が true 相当の値か（ true, 1, “a” など）
// expect(foo).toBeFalsy(); --- 変数が false 相当の値か（ false, 0, 空文字列など）
// expect([1, 2, 3]).toContain(3); --- 配列が値を含んでいるか
// expect(foo).toBeLessThan(2); --- foo < 2 であるか
// expect(foo).toBeGreaterThan(0); --- foo > 0 であるか
// expect(3.141592).toBeCloseTo(3, 0); --- 小数が有効数字 0 ケタで 3 に等しいか
// expect(func).toThrow(); --- 関数 func が何らかの例外を投げることを期待


describe('関数:calc', function () {
    it('1 + 1 = 2', function () {
        expect(calc(1, 1)).toBe(2);
    });
});