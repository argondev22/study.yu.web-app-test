import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { UserSearch } from "./UserSearch";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);
const user = userEvent.setup();

// My Answer
mockedAxios.get.mockResolvedValue({
  data: {
    id: 1,
    name: "Taro Yamada",
  }
})

describe("UserSearch", () => {
  it("入力フィールドに値を入力し、検索ボタンをクリックすると、APIから取得したユーザー情報が正しく画面に表示される", async () => {
    render(<UserSearch />);

    const input = screen.getByRole("textbox");
    await user.type(input, "Taro");
    expect(input).toHaveValue("Taro");

    const button = screen.getByRole("button");
    await user.click(button);
    expect(mockedAxios.get).toHaveBeenCalledWith("/api/users?query=Taro");
    // ↑ 1. 入力フィールドに値を入力し、検索ボタンをクリックすると適切なAPIリクエストが発生する
    await waitFor(() => {
      screen.getByText("Taro Yamada");
      // ↑ 2. APIから取得したユーザー情報が正しく画面に表示される
    })
  });
});


// Teacher's Answer
describe("UserSearch", () => {
  beforeEach(() => {
    mockedAxios.get.mockReset();
  })

  it("入力フォームに入力した内容でAPIリクエストが送信される", async () => {
    const userInfo = {
      id: 1,
      name: "Taro",
    }
    const resp = {
      data: userInfo,
    }
    mockedAxios.get.mockResolvedValue(resp);

    render(<UserSearch />);

    const input = screen.getByRole("textbox");
    await user.type(input, userInfo.name);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(mockedAxios.get).toHaveBeenCalledWith(`/api/users?query=${userInfo.name}`);
  });

  it("APIから取得したユーザー情報が正しく画面に表示される", async () => {
    const userInfo = {
      id: 1,
      name: "Taro",
    }
    const resp = {
      data: userInfo,
    }
    mockedAxios.get.mockResolvedValue(resp);

    render(<UserSearch />);

    const input = screen.getByRole("textbox");
    await user.type(input, userInfo.name);
    const button = screen.getByRole("button");
    await user.click(button);
    await waitFor(() => {
      expect(screen.getByText(userInfo.name)).toBeInTheDocument();
    })
  });
});
