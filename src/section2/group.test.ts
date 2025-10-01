describe("配列に関するテスト", () => {
  it("配列に要素を追加できる", () => {
    const arr = [1, 2, 3];
    arr.push(4);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  it("配列の長さが正しい", () => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
  });

  describe("配列の検索に関するテスト", () => {
    it("配列の要素を検索できる", () => {
      const arr = [1, 2, 3];
      expect(arr.indexOf(2)).toBe(1);
    });
  });
});
