import { test as base, expect } from "@playwright/test";
import { MainDashboard } from "../pages/MainDashboard";

//golden data per test
const DATASET = "ImageDataSet";


const test = base.extend<{ mainDashboard: MainDashboard }>({
  mainDashboard: async ({ page }, use) => {
    const mainDashboard = new MainDashboard(page);
  },
});

  test("Select Dataset", async ({ mainDashboard }) => {
  await mainDashboard.selectDataSet(DATASET);
  
});
