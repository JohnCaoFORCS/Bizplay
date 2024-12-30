import { Task } from "./utils";

function generateRandomString(length = 10) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const receiptTableData: Task[] = [
  {
    id: generateRandomString(),
    userId: "1",
    createdAt: "2024-01-01",
    cashAmount: 100000,
  },
  {
    id: generateRandomString(),
    userId: "2",
    createdAt: "2024-02-28",
    cashAmount: 200000,
  },
  {
    id: generateRandomString(),
    userId: "3",
    createdAt: "2024-04-30",
    cashAmount: 300000,
  },
  {
    id: generateRandomString(),
    userId: "4",
    createdAt: "2024-02-01",
    cashAmount: 400000,
  },
  {
    id: generateRandomString(),
    userId: "5",
    createdAt: "2024-04-21",
    cashAmount: 500000,
  },
  {
    id: generateRandomString(),
    userId: "6",
    createdAt: "2024-11-01",
    cashAmount: 600000,
  },
  {
    id: generateRandomString(),
    userId: "7",
    createdAt: "2024-12-29",
    cashAmount: 600000,
  },
  {
    id: generateRandomString(),
    userId: "8",
    createdAt: "2024-07-04",
    cashAmount: 700000,
  },
];
