import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./LoginPage.jsx";

function Home({ loggedIn }) {
  return (
    <main className="page">
      <h1>Home</h1>

      {loggedIn ? (
        <p>🟢 Du er logget inn.</p>
      ) : (
        <p>🔴 Du er ikke logget inn.</p>
      )}
    </main>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <nav className="top-nav">
        <Link to="/">Home</Link> | <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} />} />
        <Route
          path="/login"
          element={<LoginPage setLoggedIn={setLoggedIn} />}
        />
      </Routes>
    </div>
  );
}

export default App;
