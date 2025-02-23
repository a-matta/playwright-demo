import { test, expect } from "@playwright/test";

test("Login Demo", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  const username = page.locator("//input[@id='username']");
  await username.click();
  await username.fill("Amrita");
  //   const password = page.locator("id=password");
  //   await password.click();
  //   await password.fill("secret_sauce");
  //   const loginButton = page.locator("id=login-button");
  //   await loginButton.click();
});
