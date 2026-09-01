import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import ShowDetailsPage from '../pages/ShowDetailsPage'
import ShowsPage from '../pages/ShowsPage'
import WatchlistPage from '../pages/WatchlistPage'

// AppRoutes contains all routes used by the NextEpisode application.
const AppRoutes = () => {
  return (
    <Routes>
      {/* Home page */}
      <Route
        path="/"
        element={<HomePage />}
      />

      {/* Main TV show browsing page */}
      <Route
        path="/shows"
        element={<ShowsPage />}
      />

      {/* Dynamic route for an individual TV show */}
      <Route
        path="/shows/:id"
        element={<ShowDetailsPage />}
      />

      {/* User's saved TV show watchlist */}
      <Route
        path="/watchlist"
        element={<WatchlistPage />}
      />

      {/* Information about the application */}
      <Route
        path="/about"
        element={<AboutPage />}
      />

      {/* Display the 404 page for any unmatched route */}
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  )
}

export default AppRoutes