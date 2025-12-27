import { test, expect } from '@playwright/test';

test('Responsive layout test - Homepage', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/homepage-desktop.png', fullPage: true });

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.getByText('48h', { exact: true })).toBeVisible();
    await expect(page.getByText('100%', { exact: true })).toBeVisible();
    await expect(page.getByText('Get Compliant in 4 Simple Steps')).toBeVisible();
    console.log('✓ Homepage: OK');
});

test('Responsive layout test - Services page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/services');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/services-desktop.png', fullPage: true });

    await expect(page.getByText('Our Products & Services')).toBeVisible();
    await expect(page.getByText('Core Compliance')).toBeVisible();
    console.log('✓ Services page: OK');
});

test('Responsive layout test - Pricing page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/pricing');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/pricing-desktop.png', fullPage: true });

    await expect(page.getByRole('heading', { name: /Transparent Pricing/i })).toBeVisible();
    console.log('✓ Pricing page: OK');
});

test('Responsive layout test - About page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/about');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/about-desktop.png', fullPage: true });

    await expect(page.getByText('Munyaradzi Musamba')).toBeVisible();
    await expect(page.getByText('Tawanda Mukandi')).toBeVisible();
    console.log('✓ About page: OK');
});

test('Responsive layout test - Apply page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/apply');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/apply-desktop.png', fullPage: true });

    await expect(page.getByText('Start Your Application')).toBeVisible();
    console.log('✓ Apply page: OK');
});

test('Responsive layout test - Track page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/track');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/track-desktop.png', fullPage: true });

    // Use h1 to avoid strict mode violation
    await expect(page.locator('h1')).toHaveText('Track Your Application');
    console.log('✓ Track page: OK');
});

test('Responsive layout test - Partners page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/partners');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/partners-desktop.png', fullPage: true });

    await expect(page.getByText('Financial Partnerships')).toBeVisible();
    console.log('✓ Partners page: OK');
});

test('Responsive layout test - Privacy page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/privacy');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/privacy-desktop.png', fullPage: true });

    await expect(page.getByText('Privacy Policy')).toBeVisible();
    console.log('✓ Privacy page: OK');
});

test('Responsive layout test - FAQ page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/faq');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/faq-desktop.png', fullPage: true });

    await expect(page.getByRole('heading', { name: /Help & FAQ/i })).toBeVisible();
    console.log('✓ FAQ page: OK');
});
