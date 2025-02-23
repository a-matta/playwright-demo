import { test, expect } from "@playwright/test";

test("Login Demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  const username = page.locator("id=user-name");
  await username.click();
  await username.fill("standard_user");
  const password = page.locator("id=password");
  await password.click();
  await password.fill("secret_sauce");
  const loginButton = page.locator("id=login-button");
  await loginButton.click();
});
