import {
    Box,
    Button,
    Typography,
  } from '@mui/material'
  import { useNavigate } from 'react-router-dom'
  import ShowList from '../components/ShowList'
  import { useWatchlist } from '../context/WatchlistContext'
  
  // WatchlistPage displays all TV shows saved by the user.
  const WatchlistPage = () => {
    // Access the global watchlist array from Context.
    const { watchlist } = useWatchlist()
  
    // useNavigate allows navigation back to the Shows page.
    const navigate = useNavigate()
  
    // Navigate to the TV show browsing page.
    const handleBrowseShows = () => {
      navigate('/shows')
    }
  
    return (
      <Box>
        {/* Page heading */}
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
        >
          My Watchlist
        </Typography>
  
        {/* Display the number of saved shows. */}
        <Typography sx={{ mb: 3 }}>
          Saved shows: {watchlist.length}
        </Typography>
  
        {/* Show an empty state when nothing has been saved. */}
        {watchlist.length === 0 && (
          <Box
            sx={{
              textAlign: 'center',
              py: 6,
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
            >
              Your watchlist is empty.
            </Typography>
  
            <Typography sx={{ mb: 3 }}>
              Browse TV shows and save the ones you want to watch later.
            </Typography>
  
            {/* Navigate users back to the Shows page. */}
            <Button
              variant="contained"
              onClick={handleBrowseShows}
            >
              Browse Shows
            </Button>
          </Box>
        )}
  
        {/* Display saved shows when the watchlist contains items. */}
        {watchlist.length > 0 && (
          <ShowList shows={watchlist} />
        )}
      </Box>
    )
  }
  
  export default WatchlistPage