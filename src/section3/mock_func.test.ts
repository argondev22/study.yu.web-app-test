it("初めてのmock", () => {
  // jest.fn()
  const mockFn = jest.fn(() => "Hello, World!");
  mockFn();
  expect(mockFn()).toBe("Hello, World!");
});

it("mockImplementation", () => {
  const mockFn = jest.fn()
  // あとからmockを設定することが可能
  mockFn.mockImplementation(() => "Hello, World!");
  expect(mockFn()).toBe("Hello, World!");
});


