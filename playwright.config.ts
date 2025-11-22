import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  // Point to the default test directory for E2E tests
  testDir: './tests/e2e', 
  outputDir: './test-results/all',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  timeout: 60 * 1000, // Test timeout: 60s
  expect: {
    timeout: 15 * 1000, // Assertion timeout: 15s
  },

  // Start the web servers before running tests
  webServer: [
    {
      command: 'npm run dev',
      port: 5173,
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'node api-server.js',
      port: 3001,
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
  ],

  // This `use` block is the default for all projects
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15 * 1000, // Action timeout: 15s
    navigationTimeout: 30 * 1000, // Navigation timeout: 30s
  },

  reporter: [['html', { outputFolder: 'test-results/html' }], ['junit', { outputFile: 'test-results/junit.xml' }], ['list']],

  projects: [
    // Project for E2E tests (browser-based)
    { 
      name: 'e2e-chromium', 
      testDir: './tests/e2e',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: process.env.BASE_URL || 'http://localhost:5173',
      } 
    },
    { 
      name: 'e2e-firefox', 
      testDir: './tests/e2e',
      use: { 
        ...devices['Desktop Firefox'],
        baseURL: process.env.BASE_URL || 'http://localhost:5173',
      } 
    },
    { 
      name: 'e2e-webkit', 
      testDir: './tests/e2e',
      use: { 
        ...devices['Desktop Safari'],
        baseURL: process.env.BASE_URL || 'http://localhost:5173',
      } 
    },

    // Project for API tests (direct API calls)
    {
      name: 'api-tests',
      testDir: './tests/api',
      use: {
        // The baseURL for API tests should point directly to the API server
        baseURL: 'http://localhost:3001',
      },
    },
  ],
});
