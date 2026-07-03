# QA Automation Assessment

## Overview
This project contains automated UI tests using Playwright and TypeScript.

## Tech Stack
- Playwright
- TypeScript
- Node.js

## Test Scenarios
### Login
- Login with valid credentials
- Login with invalid credentials

### Checkout
- Login
- Add two products to cart
- Verify cart
- Complete checkout
- Verify Item Total + Tax = Total
- Finish checkout
- Verify success message

### Sorting
- Verify products are sorted by price (High to Low)

## Project Structure

```
pages/
tests/
playwright.config.ts
package.json
README.md
```

## Installation

```bash
npm install
```

## Install Playwright Browsers

```bash
npx playwright install
```

## Run All Tests

```bash
npx playwright test
```

## Run Specific Test

```bash
npx playwright test tests/login.spec.ts

npx playwright test tests/checkout.spec.ts

npx playwright test tests/sorting.spec.ts
```

## Run HTML Report

```bash
npx playwright show-report
```

## Browser Coverage

- Chromium
- Firefox
- WebKit
