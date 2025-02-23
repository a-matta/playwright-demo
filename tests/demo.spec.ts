import { test, expect } from "@playwright/test";

test("Login Demo", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  const username = page.locator("//input[@id='username']");
  await username.click();
  await username.fill("Amrita");
  const password = page.locator("//input[@id='password']");
  await password.click();
  await password.fill("amrita");
  const loginButton = page.locator("//a[@id='log-in']");
  await loginButton.click();
});
