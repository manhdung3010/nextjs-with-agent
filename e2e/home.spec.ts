import { expect, test } from "@playwright/test";

test("homepage renders", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /agent-ready base code/i }),
  ).toBeVisible();
});
