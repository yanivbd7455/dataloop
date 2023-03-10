import type { Page } from "@playwright/test";
import {
  projectOverview,
  projectDropDownList,
  projectTextBox,
  projectDropDownList,
  projectFirstList,
  datasetSearchTextBox,
  datasetSearchFirstList,
} from "../targets/mainDashboardLocators";

export class MainDashboard {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectProject(projectName: string) {
    await this.page.locator(projectOverview).click();
    await this.page.locator(projectDropDownList).click();
    await this.page.locator(projectTextBox).fill(projectName);
    await this.page.locator(projectFirstList).click(); 
  }

  async selectDataSet(datasetName: string) {
    await this.page.locator(datasetSearchTextBox).fill(datasetName);
//  await this.page.locator(projectFirstList).click(); 
  }

}
