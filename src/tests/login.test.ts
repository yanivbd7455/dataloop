import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

//golden data per test
const USER = "yanivbd@hotmail.com";
const PSW = "Trans7455port";


const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  },
});

test("Login to DataLoop Platform", async ({ loginPage }) => {
  await loginPage.clickLoginBtn();
  await loginPage.insertUserName(USER)
  await loginPage.insertPsw(PSW);
  
});
