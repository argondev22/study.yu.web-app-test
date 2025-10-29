# TypeScriptではじめるWebアプリケーションテスト入門

## Overview

This is a hands-on learning repository for mastering TypeScript testing with Jest. The repository provides a complete development environment with Docker containers and practical examples organized into progressive sections covering fundamental to advanced testing concepts.

## Features

### 🚀 Ready-to-Use Development Environment
- **Dev Containers**: Pre-configured development environment with VSCode
- **Docker Compose**: Containerized TypeScript/Jest testing environment
- **GitHub Templates**: Standardized issue and PR templates for collaboration

### 📚 Structured Learning Path
- **Section 2**: Basic testing concepts
  - Basic assertions and matchers
  - Asynchronous testing
  - Test grouping and organization
  - Setup and teardown operations
- **Section 3**: Advanced testing techniques
  - Mock functions (`jest.fn()`)
  - Mock modules and dependencies
  - Spy functions
  - Testing implementation details

## Directory Structure

```
.
├── .devcontainer/              # Development container configuration
├── .github/                    # GitHub configuration
│   ├── ISSUE_TEMPLATE/         # GitHub issue templates
│   └── PULL_REQUEST_TEMPLATE/  # GitHub PR template
├── .vscode/                    # VSCode configuration
├── bin/                        # Utility scripts
│   └── init-project.sh         # Project initialization script
├── docs/                       # Project documentation
├── src/                        # Source code and tests
│   ├── section2/               # Basic testing examples
│   │   ├── sum.ts              # Simple function examples
│   │   ├── sum.test.ts         # Basic test examples
│   │   ├── async_func.ts       # Async function examples
│   │   ├── async_func.test.ts  # Async testing examples
│   │   └── ...                 # More examples
│   ├── section3/               # Advanced testing examples
│   │   ├── mock_func.test.ts   # Mock function examples
│   │   ├── mock_module.ts      # Module for mocking examples
│   │   ├── mock_spy.test.ts    # Spy function examples
│   │   └── ...                 # More examples
│   ├── Dockerfile              # Docker configuration for test environment
│   ├── package.json            # NPM dependencies
│   ├── jest.config.js          # Jest configuration
│   └── tsconfig.json           # TypeScript configuration
├── Makefile                    # Convenience commands
└── docker-compose.example.yml  # Docker Compose template
```

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [VSCode](https://code.visualstudio.com/) with [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension (recommended)
- UNIX/Linux-based OS (Windows users should use WSL2)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd study.yu.web-app-test
   ```

2. **Initialize the project**
   ```bash
   make init
   ```
   This will create `docker-compose.yml` and `.devcontainer/devcontainer.json` from their example files.

3. **Open in Dev Container** (Recommended)
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) in VSCode
   - Type and select: `Dev Containers: Open Folder in Container`
   - Wait for the container to build and start

4. **Start the development environment** (if not using Dev Container)
   ```bash
   make setup
   ```

## Usage

### Running Tests

Run all tests:
```bash
make test
```

Run tests for a specific file:
```bash
make test F=./src/section2/sum.test.ts
```

Run tests in watch mode:
```bash
make test-watch
```

Run tests for a specific file in watch mode:
```bash
make test-watch F=./src/section2/sum.test.ts
```

### Running TypeScript Files

Execute a TypeScript file directly:
```bash
make run F=./src/section2/sum.ts
```

### Managing Docker Environment

Stop containers:
```bash
make down
```

Clean up containers and volumes:
```bash
make clean
```

## Learning Path

### Section 2: Basic Testing
Start with basic testing concepts in `src/section2/`:
- `sum.test.ts` - Basic matchers and assertions
- `divide.test.ts` - More examples with matchers
- `matcher_func.test.ts` - Various Jest matchers (toBe, toEqual, etc.)
- `async_func.test.ts` - Testing asynchronous code (Promises)
- `group.test.ts` - Organizing tests with describe blocks
- `setup_teardown.test.ts` - beforeEach, afterEach, beforeAll, afterAll hooks
- `practice.test.ts` - Practice exercises

### Section 3: Advanced Testing
Progress to advanced techniques in `src/section3/`:
- `mock_func.test.ts` - Creating and using mock functions with jest.fn()
- `mock_return.test.ts` - Controlling mock return values
- `mock_called.test.ts` - Verifying function calls and arguments
- `mock_module.test.ts` - Mocking entire modules with jest.mock()
- `mock_spy.test.ts` - Using spies to track function calls
- `practice.test.ts` - Advanced practice exercises

## Makefile Commands

| Command | Description |
|---------|-------------|
| `make init` | Initialize project (create config files from examples) |
| `make setup` | Build and start Docker environment |
| `make run F=<file>` | Run a TypeScript file in the container |
| `make test` | Run all Jest tests |
| `make test F=<file>` | Run tests for a specific file |
| `make test-watch` | Run tests in watch mode |
| `make test-watch F=<file>` | Run specific test file in watch mode |
| `make down` | Stop Docker containers |
| `make clean` | Stop containers and clean up Docker resources |

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.
