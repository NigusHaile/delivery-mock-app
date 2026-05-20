# Delivery Mock App — Frontend

A React 19 single-page application for managing users in a delivery system.
Provides full CRUD functionality (Create, Read, Update, Delete) for user records,
with client-side validation and integration with a backend REST API.

## ✨ Features

- **List users** — paginated view of all registered users
- **View user details** — drill into individual user records
- **Create new users** — form with field-level validation
- **Edit existing users** — pre-populated form, same validation rules
- **Delete users** — with confirmation prompt
- **Client-side validation** — username length, required names, email format, international phone number format
- **Client-side routing** — React Router for SPA navigation

## 🛠️ Tech stack

- **React 19** with functional components and hooks
- **React Router v7** for client-side routing
- **Axios** for HTTP requests
- **Create React App** as the build/dev tool
- **React Testing Library** + Jest DOM for tests

## 📋 User data model

Each user has the following fields:

| Field         | Validation                                    |
|---------------|-----------------------------------------------|
| `userName`    | 3–20 characters                               |
| `firstName`   | required                                      |
| `middleName`  | optional                                      |
| `lastName`    | required                                      |
| `phoneNumber` | international format (`+`, digits, separators)|
| `email`       | valid email format                            |

## 🔌 Backend API

The app expects a REST backend at `http://localhost:8082/api/users` exposing:

| Method  | Endpoint        | Purpose            |
|---------|-----------------|--------------------|
| `GET`   | `/api/users`    | List all users     |
| `GET`   | `/api/users/:id`| Get user by ID     |
| `POST`  | `/api/users`    | Create a new user  |
| `PUT`   | `/api/users/:id`| Update a user      |
| `DELETE`| `/api/users/:id`| Delete a user      |

## Getting started

### Prerequisites
- Node.js (v18+ recommended)
- A running backend at `http://localhost:8082` (or update the API URL in `UserService.js`)

### Installation
git clone https://github.com/<your-username>/delivery-mock-app.git
cd delivery-mock-app
npm install

### Run in development

npm start

Opens [http://localhost:3000](http://localhost:3000) with hot reload.

### Build for production

npm run build

Outputs to the `build/` folder.

### Run tests

npm test


## 📁 Project structure

src/
├── App.js                      # Main app + router setup
├── App.css                     # Global styles
├── index.js                    # React entry point
├── Components/
│   ├── UserList.jsx            # List view with delete action
│   ├── UserForm.jsx            # Create + edit form with validation
│   ├── UserDetails.jsx         # Individual user detail view
│   └── UserList.css            # List styles
└── Services/
└── UserService.js          # Axios client + API methods

## 🗺️ Routes

| Path           | Component       | Purpose             |
|----------------|-----------------|---------------------|
| `/`            | `UserList`      | All users           |
| `/create`      | `UserForm`      | New user form       |
| `/edit/:id`    | `UserForm`      | Edit existing user  |
| `/user/:id`    | `UserDetails`   | View one user       |

## Configuration

To point at a different backend, edit `src/Services/UserService.js`:

const API_URL = 'http://your-backend.example.com/api/users';

For production, consider moving this into an environment variable (`REACT_APP_API_URL`).

## Possible improvements

- Move the API URL into `.env` (e.g. `REACT_APP_API_URL`)
- Add loading states and error toasts
- Replace `window.confirm` with a custom modal
- Add pagination or search/filter for large user lists
- Add proper auth (login, JWT, protected routes)
- Replace inline `&nbsp;` spacing in navbar with CSS

## 📄 License

Add preferred license here (MIT, Apache 2.0, etc.).
