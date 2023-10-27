# Chrome Extension with TypeScript and Next.js Client

This project demonstrates how to create a Chrome extension using TypeScript, bundled with Webpack, alongside a client application built with Next.js. The extension displays the client side within an iframe, showcasing the URL of the current webpage.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
  - [Extension](#extension)
  - [Client](#client)
    - [Docker](#using-docker)
  - [Common Module](#common-module)
- [Building for Production](#building-for-production)
- [License](#license)

## Project Structure

- `extension/`: Chrome extension codebase
- `client/`: Next.js client application
- `common/`: Shared utilities and types

## Getting Started

### Prerequisites

- Node.js and yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/barrymun/sample-extension.git
cd sample-extension
```

Install dependencies for all parts of the project:

```bash
yarn install
```

## Development

### Extension

To build the extension run:

```bash
yarn extension-build
```

It is also possible to start Webpack in watch mode, automatically rebuilding the extension on file changes:

```bash
yarn extension-watch
```

To run the extension locally:

1. Navigate to chrome://extensions/ in Google Chrome.
2. Enable "Developer mode" at the top right.
3. Click "Load unpacked" and select the extension/build directory.

### Client

To start in dev mode run:

```bash
yarn client-dev
```

This will start the Next.js application, which the extension will load inside an iframe.

#### Using Docker

If you prefer to run the client inside a Docker container, use the following command:

```bash
yarn docker-up
```

This will build and start the client application inside a Docker container, ensuring a consistent environment for all developers.

See `package.json` in the root directory for more Docker related scripts.

### Common module

The `common` module contains shared types, utilities, and other code that both the extension and client need access to. Ensure that this module is installed locally so that changes are reflected across both projects.

To make changes:

1. Navigate to the common directory.
2. Make your changes and run npm run build to compile the TypeScript code.
3. Ensure that the common module is correctly linked in both the extension and client projects.

## Building for Production

To build the extension and client for production, run the following commands respectively:

```bash
yarn extension-build
```

```bash
yarn client-build
```

## License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.
