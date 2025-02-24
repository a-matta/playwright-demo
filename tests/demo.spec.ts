import { test, expect } from "@playwright/test";

test("Login Demo 1", async ({ page }) => {
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

test("Login Demo 2", async ({ page }) => {
  await page.goto(
    "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
  );
  const username = page.locator("//input[@id='Email']");
  await username.click();
  await username.fill("admin@yourstore.com");
  const password = page.locator("//input[@id='Password']");
  await password.click();
  await password.fill("admin");
  const loginButton = page.locator("//button[text()='Log in']");
  await loginButton.click();
  const logoutButton = page.locator("//a[text()='Logout']");
  await logoutButton.click();
});
