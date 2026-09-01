import {
    createContext,
    useContext,
    useEffect,
    useState,
  } from 'react'
  
  // Create the Context that will store the shared watchlist data.
  const WatchlistContext = createContext(null)
  
  // WatchlistProvider makes the watchlist available to all child components.
  export const WatchlistProvider = ({ children }) => {
    // Load the saved watchlist from localStorage when the app starts.
    const [watchlist, setWatchlist] = useState(() => {
      const savedWatchlist = localStorage.getItem('watchlist')
  
      // Convert the saved JSON string back into an array.
      return savedWatchlist
        ? JSON.parse(savedWatchlist)
        : []
    })
  
    // Save the watchlist to localStorage whenever it changes.
    useEffect(() => {
      localStorage.setItem(
        'watchlist',
        JSON.stringify(watchlist)
      )
    }, [watchlist])
  
    // Add a show to the watchlist.
    const addToWatchlist = (show) => {
      setWatchlist((currentWatchlist) => {
        // Check whether the show has already been added.
        const alreadyAdded = currentWatchlist.some(
          (watchlistShow) => watchlistShow.id === show.id
        )
  
        // Do not add duplicate shows.
        if (alreadyAdded) {
          return currentWatchlist
        }
  
        // Return a new array containing the existing shows and the new show.
        return [...currentWatchlist, show]
      })
    }
  
    // Remove a show from the watchlist using its ID.
    const removeFromWatchlist = (showId) => {
      setWatchlist((currentWatchlist) =>
        currentWatchlist.filter(
          (show) => show.id !== showId
        )
      )
    }
  
    // Check whether a specific show is already in the watchlist.
    const isInWatchlist = (showId) => {
      return watchlist.some(
        (show) => show.id === showId
      )
    }
  
    return (
      <WatchlistContext.Provider
        value={{
          watchlist,
          addToWatchlist,
          removeFromWatchlist,
          isInWatchlist,
        }}
      >
        {children}
      </WatchlistContext.Provider>
    )
  }
  
  // Custom hook used by components that need access to the watchlist.
  export const useWatchlist = () => {
    const context = useContext(WatchlistContext)
  
    // Give a clear error if the hook is used outside WatchlistProvider.
    if (!context) {
      throw new Error(
        'useWatchlist must be used inside a WatchlistProvider'
      )
    }
  
    return context
  }