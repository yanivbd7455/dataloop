import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

const TODO_ONE = "Walk the dog";
const TODO_TWO = "Haircut";
const TODO_THREE = "Read a book";

const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
   
//     const loginBtn = await loginPage.getByRole('button', { name: 'Sign Up / Login' });
//     expect(loginBtn === 0).toBeTruthy();
  },
});

test("Login to DataLoop Platform", async ({ loginPage }) => {
  await todoPage.addTodo(TODO_ONE);
  await todoPage.addTodo(TODO_TWO);
  await todoPage.addTodo(TODO_THREE);

  const length = await todoPage.listSize();
  expect(length === 3).toBeTruthy();
});
