import type { Page } from "@playwright/test";
import {
  loginBtn,
//   labelWithText,
//   removeButton,
//   inputCheckbox,
//   linkWithText,
//   filters,
//   dataloopItemsLabels,
//   dataloopItemsList,
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
    await this.page.locator('button:text("Sign Up / Login")').click();
  }

  async insertUserName(user: string) {
    await this.page.click('button:text("Sign Up / Login")');
    await this.page.getByPlaceholder('yours@example.com').fill(user);
  }

  async insertPsw(psw: string) {
    await this.page.click('button:text("Sign Up / Login")');
    await this.page.getByPlaceholder('your password').fill(psw);
  }

//   async loginInserUser(user: string , psw: string) {
//     // await this.page.fill(dataloopInput, user);
//     // await this.page.press(dataloopInput, "Enter");

//     await this.page.click('button:text("Sign Up / Login")')
//     //() name: 'Sign Up / Login' }).click();
//     await this.page.getByPlaceholder('yours@example.com').fill(user);
//     await this.page.getByPlaceholder('your password').click();
//     await this.page.getByPlaceholder('your password').fill(psw);
//     await this.page.getByRole('button', { name: 'Log In', exact: true }).click();
//     // await this.page.goto('https://console.dataloop.ai/projects');
//     // await this.page.getByRole('button', { name: 'Go to project' }).click();
//   }
  
//   async loginInserPsw(psw: string) {
//     await this.page.fill(dataloopInput, psw);
//     await this.page.press(dataloopInput, "Enter");
  }
}
