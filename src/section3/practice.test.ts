import axios from "axios";
import Users from "./practice";

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

jest.mock("axios");
const mockedAxios = jest.mocked(axios);
mockedAxios.get.mockResolvedValue({
  data: users,
});

it("", async () => {
  const result = await Users.all();
  expect(result).toBe(users);
  expect(axios.get).toHaveBeenCalledTimes(1);
})
