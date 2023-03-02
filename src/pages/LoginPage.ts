import type { Page } from "@playwright/test";
import {
  loginBtn,
  userTextBox,
  pswTextBox,
} from "../targets/loginLocators";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://console.dataloop.ai/welcome");
  }

  async clickLoginBtn() {
    await this.page.locator(loginBtn).click();
  }

  async insertUserName(user: string) {
    await this.page.click('button:text("Sign Up / Login")');
    await this.page.getByPlaceholder('yours@example.com').fill(user);
  }

  async insertPsw(psw: string) {
    await this.page.click('button:text("Sign Up / Login")');
    await this.page.getByPlaceholder('your password').fill(psw);
  }

}
