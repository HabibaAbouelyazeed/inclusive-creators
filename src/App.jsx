import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import EventsPage from "./pages/EventsPage";
import ArticlesPage from "./pages/ArticlesPage";
import ProfilePage from "./pages/ProfilePage";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path="" Component={LandingPage} />
          <Route path="/home" Component={HomePage} />
          <Route path="/courses" Component={CoursesPage} />
          <Route path="/events" Component={EventsPage} />
          <Route path="/articles" Component={ArticlesPage} />
          <Route path="/profile" Component={ProfilePage} />
        </Routes>

        
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
