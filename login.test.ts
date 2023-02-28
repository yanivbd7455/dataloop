import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://console.dataloop.ai/welcome?redirect=%2Fprojects');
  await page.getByRole('button', { name: 'Sign Up / Login' }).click();
  await page.getByPlaceholder('yours@example.com').fill('yanivbd@hotmail.com');
  await page.getByPlaceholder('your password').click();
  await page.getByPlaceholder('your password').fill('Trans7455port');
  await page.getByRole('button', { name: 'Log In', exact: true }).click();
  await page.goto('https://console.dataloop.ai/projects');
  await page.getByRole('button', { name: 'Go to project' }).click();
});
