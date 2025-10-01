import { ShoppingList } from "./practice";

// My Answer
describe("addItemに関するテスト", () => {
  it("アイテムをリストに追加できる", () => {
    const shoppingList = new ShoppingList();
    shoppingList.addItem("Apple");
    expect(shoppingList.list).toEqual(["Apple"]);
  });
});

describe("removeItemに関するテスト", () => {
  it("アイテムをリストから削除できる", () => {
    const shoppingList = new ShoppingList();
    shoppingList.addItem("Apple");
    shoppingList.removeItem("Apple");
    expect(shoppingList.list).toEqual([]);
  });

  it("存在しないアイテムの削除を試みたときにエラーをスローする", () => {
    const shoppingList = new ShoppingList();
    expect(() => shoppingList.removeItem("Apple")).toThrow("アイテム: Apple は存在しません");
  });
});

// Teacher's Answer
describe("ShoppingList", () => {
  let shoppingList: ShoppingList;

  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  describe("addItem", () => {
    it("アイテムをリストに追加できる", () => {
      shoppingList.addItem("Apple");
      expect(shoppingList.list).toEqual(["Apple"]);
    });
  });

  describe("removeItem", () => {
    it("アイテムをリストから削除できる", () => {
      shoppingList.addItem("Apple");
      shoppingList.removeItem("Apple");
      expect(shoppingList.list).not.toContain("Apple");
    });

    it("存在しないアイテムの削除を試みたときにエラーをスローする", () => {
      expect(() => shoppingList.removeItem("Banana")).toThrow("アイテム: Banana は存在しません");
    });
  });
});
