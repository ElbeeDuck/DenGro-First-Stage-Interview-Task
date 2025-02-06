# Interview Task for Software QA Engineer

## Overview
This repository contains automated tests written in Playwright for an interview task for the DenGro website.

## Test Scenarios
It covers the following test the 5 different pieces of functionality listed below:
- Assert that a piece of text appears on a given page
- Assert clicking a button does some functionality
- Assert clicking a link navigates correctly
- Assert that the pricing page allows users to change their currency [https://dengro.com/pricing](https://dengro.com/pricing) and that the pricing panels reflect that
- Capture a screenshot of any page

## Getting Started

### Prerequisites

1. Clone the repository

2. Install Node.js (recommended LTS version)
- Download and install Node.js from the official website - https://nodejs.org/en/download.
3. Install Playwright via npm:
    ```bash
    npm install -D @playwright/test
    ```
4. Install Playwright dependencies:
    ```bash
    npx playwright install
    ```
5. Install Typescript:
    ```bash
    npm install --save-dev typescript
    ```

### Running Tests
1. To execute the tests, run the following command:
    ```bash
    npx playwright test
    ```

2. To run a specific test file:
    ```bash
    npx playwright test dengroExample.spec.ts
    ```
