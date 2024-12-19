# Technical Test: Web App

This project implements a web application similar to the template provided [here](https://gi-pf.vercel.app/), following the requirements outlined in the technical assessment. It integrates APIs for data fetching and avatar generation, using the Refine framework (React Query + Ant Design).

## Features

- **Album Module**:
  - **Album List**:
    - Displays a table of 100 albums.
    - Columns: ID, Title, User (with avatar and name based on userId), and Actions (button to view album details).
    - Pagination: State is synced with the URL to preserve pagination state upon page reloads.
    - User column: Clicking navigates to the User detail screen.
  - **Album Detail**:
    - Displays User information (avatar, name, email).
    - Displays Album title.
    - Displays a list of photos with thumbnails (clicking opens the full photo).

- **User Module**:
  - **User List**:
    - Displays a table of 10 users.
    - Columns: ID, Avatar, Name, Email, Phone, Website, Actions (button to view user details).
  - **User Detail**:
    - Displays User information (avatar, name, email).
    - Displays the user's 10 albums with a button to view album details.

- **Responsive Design**:
  - Optimized for screens 1280px wide.

- **Additional Features**:
  - Displays loading states while fetching API data.
  - Clickable elements use a pointer cursor.
  - Emails and phone numbers are clickable.
  - External links (website URLs) open in a new tab.
  - All `img` tags include an `alt` attribute.
  - Organized source code with clear structure and sensible variable naming.


## Prerequisites

- [Node.js](https://nodejs.org/) (version >= 14)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)



## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

## Environment Variables

If the project requires environment variables, create a `.env` file in the root directory and add the following:

```
REACT_APP_API_BASE_URL=https://jsonplaceholder.typicode.com
```

Replace `https://jsonplaceholder.typicode.com` with the appropriate API base URL if necessary.

## Usage

### Development Server

Start the development server:

Using npm:
```bash
npm start
```

Using yarn:
```bash
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Build

To build the project for production:

Using npm:
```bash
npm run build
```

Using yarn:
```bash
yarn build
```

The built files will be in the `build` folder.

### Linting

Run linting to check for code style issues:

Using npm:
```bash
npm run lint
```

Using yarn:
```bash
yarn lint
```

### Testing

Run tests (if applicable):

Using npm:
```bash
npm test
```

Using yarn:
```bash
yarn test
```

## Project Structure

```plaintext
├── src
│   ├── components   # Reusable components
│   ├── pages         # Application pages
│   ├── utils         # Utility functions
│   ├── App.js        # Main application component
│   └── index.js      # Entry point
├── public
│   └── index.html    # HTML template
├── .env              # Environment variables
├── package.json      # Project configuration
├── README.md         # Project documentation
└── ...
```

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
