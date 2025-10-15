import fs from "fs";
import { readFile } from "./mock_module";

// モックの設定はトップレベルで記述
jest.mock("fs");
const mockFs = jest.mocked(fs);
mockFs.readFileSync.mockReturnValue("dummy data");

it("readFileがデータを返却する", () => {
  const result = readFile("path/dummy");
  expect(result).toBe("dummy data");
  expect(fs.readFileSync).toBe("dummy data");
})
