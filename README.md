# Instagram Unfollow Cypress

This project automates the process of unfollowing users on Instagram using [Cypress](https://www.cypress.io/), a JavaScript-based end-to-end testing framework.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- [Cypress](https://www.cypress.io/) installed as a dependency.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/instagram-unfollow-cypress.git
cd instagram-unfollow-cypress
```

2. Install dependencies:

```bash
npm install
```

## Configuration

- Update the `.env` file with your Instagram credentials (if applicable).
- Modify the `cypress.config.js` file to adjust the default command timeout or other settings.

## Usage

1. Open the Cypress Test Runner:

```bash
npx cypress open
```

2. Run the tests:

- Select the desired test from the Cypress Test Runner interface.

## Project Structure

- `cypress/`: Contains test files, videos, and screenshots.
- `.gitignore`: Specifies files and directories to ignore in version control.
- `package.json`: Lists project dependencies.
- `cypress.config.js`: Cypress configuration file.

## Notes

- Videos and screenshots of test runs are saved in the `cypress/videos/` and `cypress/screenshots/` directories, respectively.
- Ensure sensitive information (e.g., credentials) is not committed to the repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
