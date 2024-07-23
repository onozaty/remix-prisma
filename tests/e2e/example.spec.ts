import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/");

  await expect(page).toHaveTitle(/Remix/);
});
