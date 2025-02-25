import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle(/Swag Labs/);
});

test.only("Login", async ({ page }) => {
  //Added tag runs only this test
  const username = page.locator("id=user-name");
  await username.click();
  await username.fill("standard_user");
  const password = page.locator("id=password");
  await password.click();
  await password.fill("secret_sauce");
  const loginButton = page.locator("id=login-button");
  await loginButton.click();
  const openMenu = page.locator("id=react-burger-menu-btn");
  await openMenu.click();
});

test.skip("Logout", async ({ page }) => {
  //added tag skip
  const openMenu = page.locator("id=react-burger-menu-btn");
  await openMenu.click();
});

test.fixme("Inventory", async ({ page }) => {
  //added tag fixme
  await page.goto("https://www.saucedemo.com/inventory.html");
  await expect(page).toHaveTitle(/Swag Labs/);
  const header = page.locator("text()=Swag Labs");
  await header.isVisible();
});

test.afterEach(async ({ page }) => {
  await page.close();
});
