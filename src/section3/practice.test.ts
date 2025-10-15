import axios from "axios";
import Users from "./practice";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

// My Answer
const users = [
  {
    name: "Taro Yamada",
    age: 23,
  },
  {
    name: "Yu Onishi",
    age: 25
  }
]
mockedAxios.get.mockResolvedValue({
  data: users,
});

it("ユーザーを取得できる", async () => {
  const result = await Users.all();
  expect(result).toBe(users);
  expect(axios.get).toHaveBeenCalledTimes(1);
})

// Teacher's Answer
describe("Users", () => {
  beforeEach(() => {
    mockedAxios.get.mockClear();
  })

  it("ユーザーを取得できる", async () => {
    const users = [
      {
        name: "Taro",
      },
      {
        name: "Hanako",
      },
    ];
    const resp = {
      data: users,
    };
    mockedAxios.get.mockResolvedValue(resp);

    const result = await Users.all();
    expect(result).toEqual(users);
    expect(mockedAxios.get).toHaveBeenCalledWith("/users.json");
  })
})
