import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

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
import SearchResults from "./pages/SearchResults";
import GuardedRoute from "./GuardRoute";
import { auth } from "./config/Firebase/firebase";

function App() {
  const [user] = useAuthState(auth);
  return (
    <Router>
      <div className="app">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route
            path="/event/:eventId"
            element={<EventsDetails />}
            key="eventDetails"
          />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route
            path="/article/:articleId"
            element={<ArticlesDetailsPage />}
            key="articleDetails"
          />

          <Route
            path="/courses/:courseTitle/:courseId"
            element={<CoursesDetailsPage />}
            key="courseDetails"
          />
          
          <Route element={<GuardedRoute user={!!user} redirectPath="/login" />}>
            <Route path="/home" element={<HomePage />} key="home" />
            <Route path="/profile" element={<ProfilePage />} key="profile" />
            <Route
              path="/search"
              element={<SearchResults />}
              key="searchResults"
            />
          </Route>

          <Route element={<GuardedRoute user={!user} redirectPath="/home" />}>
            <Route path="/register" element={<RegisterPage />} key="register" />
            <Route path="/login" element={<Login />} key="login" />
          </Route>
        </Routes>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
