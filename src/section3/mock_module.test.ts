import fs from "fs";
import { readFile } from "./mock_module";

// モックの設定はトップレベルで記述
jest.mock("fs"); // モック化の設定（これによって、fsライブラリがモック化される。モック化後、fsライブラリのメソッドは全て空の関数になる）
const mockFs = jest.mocked(fs); // TSで記述する場合のみ必要な記述。コンパイラに型を伝えるためのもの。本質的にモック化とは無関係であるため注意
mockFs.readFileSync.mockReturnValue("dummy data"); // メソッドの挙動を指定

it("readFileがデータを返却する", () => {
  const result = readFile("path/dummy");
  expect(result).toBe("dummy data");
  expect(fs.readFileSync).toBe("dummy data");
})
