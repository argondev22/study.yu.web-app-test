it("モック関数に戻り値を設定する", () => {
  const mockFn = jest.fn();
  mockFn.mockReturnValue("Hello, World!");
  expect(mockFn()).toBe("Hello, World!");
  expect(mockFn()).toBe("Hello, World!");
  expect(mockFn()).toBe("Hello, World!");
});

it("モック関数に一度だけ返される戻り値を設定する", () => {
  const mockFn = jest.fn();
  mockFn.mockReturnValueOnce("Hello, World!");
  expect(mockFn()).toBe("Hello, World!");
  expect(mockFn()).toBe(undefined);
});

it("モック関数に非同期な戻り値を設定する", async () => {
  const mockFunc = jest.fn();
  mockFunc.mockResolvedValue("Hello World!");
  const result = await mockFunc();
  expect(result).toBe("Hello World!")
})
