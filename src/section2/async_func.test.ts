import { delay } from "./async_func";

it("delayが指定された時間後にメッセージを返す", async () => {
  const result = await delay("Hello, World!", 1000);
  expect(result).toBe("Hello, World!");
});

it("timeがマイナスの場合はエラーを返す", async () => {
  try {
    const result = await delay("Hello, World!", -1000);
    expect(result).toBe("Hello, World!");
  } catch (error: any) {
    expect(error.message).toBe("timeは0以上である必要があります");
  }
});



