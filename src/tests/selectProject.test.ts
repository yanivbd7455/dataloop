import { test as base, expect } from "@playwright/test";
import { MainDashboard } from "../pages/MainDashboard";

//golden data per test
const PROJECT = "automation";
const DATASET = "ImageDataSet";


const test = base.extend<{ mainDashboard: MainDashboard }>({
  mainDashboard: async ({ page }, use) => {
    const mainDashboard = new MainDashboard(page);
  },
});

test("Select Project", async ({ mainDashboard }) => {
  await mainDashboard.clickLoginBtn();
  await mainDashboard.insertUserName(USER)
  await mainDashboard.insertPsw(PSW);
  
}

  test("Select Dataset", async ({ mainDashboard }) => {
  await mainDashboard.clickLoginBtn();
  await mainDashboard.insertUserName(USER)
  await mainDashboard.insertPsw(PSW);
  
});
