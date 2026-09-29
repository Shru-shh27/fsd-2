// Create a multi-page admin SPA with protected routes (login required), a dashboard with student statistics, nested routing for sub-sections, and a 404 Not Found page.

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

function Login() {
  return (
    <div>
      <h2>Login Page</h2>

      <button
        onClick={() => {
          localStorage.setItem("login", "true");
          window.location.href = "/dashboard";
        }}
      >
        Login
      </button>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Students: 50</p>
      <p>Total Courses: 5</p>

      <Link to="/dashboard/students">
        Students
      </Link>
      <br />

      <Link to="/dashboard/settings">
        Settings
      </Link>
    </div>
  );
}

function Students() {
  return <h2>Students Section</h2>;
}

function Settings() {
  return <h2>Settings Section</h2>;
}

function ProtectedRoute({ children }) {
  const login = localStorage.getItem("login");

  return login ? children : <Navigate to="/login" />;
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        {" | "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/students"
          element={
            <ProtectedRoute>
              <Students />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

