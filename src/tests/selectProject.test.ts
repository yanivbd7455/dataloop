import { test as base, expect } from "@playwright/test";
import { MainDashboard } from "../pages/MainDashboard";

//golden data per test
const PROJECT = "automation";


const test = base.extend<{ mainDashboard: MainDashboard }>({
  mainDashboard: async ({ page }, use) => {
    const mainDashboard = new MainDashboard(page);
  },
});

test("Select Project", async ({ mainDashboard }) => {
  await mainDashboard.selectProject(PROJECT);
 
});
