import { useEffect, useState } from "react";

// Custom hook for fetching TV shows from the TVMaze API.
// It supports both browsing by page and searching by show name.
export const useShows = (searchQuery = "", page = 1) => {
  // Store the TV shows returned from the API.
  const [shows, setShows] = useState([]);

  // Track whether the API request is still loading.
  const [loading, setLoading] = useState(true);

  // Store an error message if the API request fails.
  const [error, setError] = useState("");

  // Fetch TV shows whenever the search query or browse page changes.
  useEffect(() => {
    // Flag used to ignore an outdated API response.
    let ignore = false;

    // Reset loading and error state before each request.
    setLoading(true);
    setError("");

    // Search the whole TVMaze search endpoint when a query exists.
    // Otherwise, load a specific page from the standard shows endpoint.
    const url = searchQuery
      ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
          searchQuery
        )}`
      : `https://api.tvmaze.com/shows?page=${page}`;

    fetch(url)
      .then((response) => {
        // Throw an error if the request was unsuccessful.
        if (!response.ok) {
          throw new Error("Unable to load TV shows.");
        }

        return response.json();
      })
      .then((data) => {
        if (!ignore) {
          // Search results contain { score, show },
          // so extract the show object when searching.
          const showData = searchQuery
            ? data.map((result) => result.show)
            : data;

          // Store the processed TV show data.
          setShows(showData);

          // Mark the request as complete.
          setLoading(false);
        }
      })
      .catch((error) => {
        if (!ignore) {
          // Store the error message for display.
          setError(error.message);

          // Mark the request as complete even if it failed.
          setLoading(false);
        }
      });

    // Cleanup prevents an outdated request from updating state.
    return () => {
      ignore = true;
    };
  }, [searchQuery, page]);

  // Return the data needed by components using this hook.
  return {
    shows,
    loading,
    error,
  };
};
