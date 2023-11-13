import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import EventsPage from "./pages/EventsPage";
import ArticlesPage from "./pages/ArticlesPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import Login from "./pages/LoginPage";
import CoursesDetailsPage from "./pages/CoursesDetailsPage";
import ArticlesDetailsPage from "./pages/ArticlesDetailsPage";
import "./App.css";
import Footer from "./components/Footer";
import EventsDetails from "./pages/EventsDetails";

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
          <Route
            path="/courses/:courseTitle/:courseId"
            Component={CoursesDetailsPage}
          />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event/:eventId" element={<EventsDetails />} />
          <Route path="/articles" Component={ArticlesPage} />
          <Route path="/article/:articleId" Component={ArticlesDetailsPage} />
          <Route path="/profile" Component={ProfilePage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/login" Component={Login} />
        </Routes>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
