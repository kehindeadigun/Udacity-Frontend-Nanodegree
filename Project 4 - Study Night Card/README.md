# Study Night Card

A front-end optimization and testing project built as part of the Udacity Frontend Nanodegree. The Study Night application is a flashcard tool that lets users browse card sets, flip through cards, shuffle, and create their own sets and cards.

The focus of this project is not building the app from scratch, but optimizing and testing it — configuring dependencies, writing unit and end-to-end tests, and automating the build process for production.

## What This Project Covers

- Installing and configuring npm dependencies and VSCode extensions
- Writing unit tests with **Mocha** and **Chai** to verify application logic
- Writing end-to-end tests with **Cypress** to validate form and navigation behavior
- Optimizing the app for production using **Parcel** (minification and image compression)
- Automating testing and build tasks with **Gulp**

## Project Structure

```
├── src/                  # Application source files
│   ├── index.js          # Entry point and navigation logic
│   ├── homePage.js       # Home page rendering
│   ├── aboutPage.js      # About page rendering
│   ├── cardSetsPage.js   # Card sets library page
│   ├── cardsPage.js      # Individual card study page
│   ├── shuffle.js        # Fisher-Yates shuffle algorithm
│   └── utilityRenderFunctions.js  # Shared DOM helper functions
├── data/                 # Static card set data
├── styles/               # CSS stylesheets
├── images/               # Image assets
├── test/                 # Mocha unit tests
├── cypress/              # Cypress end-to-end tests
├── index.html            # Main HTML entry point
└── gulpfile.js           # Gulp task definitions
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running the App

### Development server

```bash
gulp
```

Builds the project with Parcel and starts the development server at `http://localhost:1234`.

### Build only

```bash
gulp build
```

Outputs the optimized production bundle (minified JS/CSS, compressed images) to the `dist/` folder.

## Running Tests

### Unit tests (Mocha + Chai)

```bash
gulp unit-test
```

### End-to-end tests (Cypress)

```bash
gulp cy-test
```

Runs Cypress in headless mode. Make sure the development server is running before executing e2e tests.
