# Technical Test: Web App

[Website](https://fe-test-sigma.vercel.app/)

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
   git clone https://github.com/MeowStat/fe-test.git
   cd fe-test
   ```

2. Install dependencies:

   Using npm:
   ```bash
   npm install
   ```

## Usage

### Development Server

Start the development server:

Using npm:
```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

### Build

To build the project for production:

Using npm:
```bash
npm run build
```
or
```bash
vite build
```

The built files will be in the `dict` folder.

## Project Structure

```plaintext
├── src
│   ├── components 
│   ├── pages         
│   ├── App.jsx
│   └── index.jsx     
├── public
│   |── favicon.ico
|   └── manifest.json  
├── .gitignore
├── index.html
├── package-lock.json
├── package.json      
├── README.md        
└── vite.config.js
```

