import { test, expect } from "@playwright/test";
import exp from "constants";

test("Assert Demo", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  await expect(page.locator("text=The Kitchen")).toHaveCount(1); //check element present or not
  await expect(page.locator("text=The Kitchen")).toBeVisible;
  await expect(page.locator("text=The Kitchen")).toHaveAttribute(
    "class",
    /.*css-dpmy2a/
  ); // check with reg exp
  await expect(page).toHaveURL("https://kitchen.applitools.com/");
  await expect(page).toHaveTitle(/The Kitchen/);
});
