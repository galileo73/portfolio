import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should render hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('GNSS');
  });

  test('should display navigation', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('should scroll to sections via nav links', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation').getByRole('link', { name: 'Experience' }).click();
    await expect(page).toHaveURL(/#experience/);
  });

  test('should toggle mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const menuButton = page.getByRole('button', { name: 'Toggle navigation menu' });
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('should display contact section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
  });
});