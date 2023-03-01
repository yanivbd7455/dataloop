import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

const TODO_ONE = "Walk the dog";
const TODO_TWO = "Haircut";
const TODO_THREE = "Read a book";

const test = base.extend<{ loginPage: LoginPage }>({
  todoPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    const length = await loginPage.listSize();
    expect(length === 0).toBeTruthy();

    await use(loginPage);
  },
});

test("Adding three items to an empty todo list", async ({ todoPage }) => {
  await todoPage.addTodo(TODO_ONE);
  await todoPage.addTodo(TODO_TWO);
  await todoPage.addTodo(TODO_THREE);

  const length = await todoPage.listSize();
  expect(length === 3).toBeTruthy();
});
