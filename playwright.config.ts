import * as process from 'process';

import { defineConfig, devices } from '@playwright/test';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    testDir: './e2e/specs',
    testMatch: 'e2e/specs/**/*.spec.ts',
    use: {
        baseURL: 'http://localhost:5173',  // ReactアプリのローカルサーバーURL
        headless: true,
        screenshot: 'only-on-failure',  // エラー時にスクリーンショットを撮る
        video: 'retain-on-failure',
    },
    webServer: {
        command: 'npm run dev',
        port: 5173,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
    outputDir: 'test-results/e2e',
    reporter: [[
        'html', {
            outputFolder: 'test-results/e2e-report',
            open: 'never'
        }]],
    projects: [
        {
            name: 'Chrome',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'Edge',
            use: { ...devices['Desktop Edge'] },
        },
        {
            name: 'Firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        // {
        //     name: 'Safari',
        //     use: { ...devices['Desktop Safari'] },
        // },
    ],
});
