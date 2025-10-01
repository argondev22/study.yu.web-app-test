import { ShoppingList } from "./practice";

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
