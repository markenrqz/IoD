import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography,
  } from '@mui/material'
  import { Link } from 'react-router-dom'
  import { useWatchlist } from '../context/WatchlistContext'
  
  // Navbar provides navigation between the main application pages.
  const Navbar = () => {
    // Access the shared watchlist so we can display the saved-show count.
    const { watchlist } = useWatchlist()
  
    return (
      <AppBar position="static">
        <Toolbar>
          {/* Application name links back to the home page */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
            }}
          >
            NextEpisode
          </Typography>
  
          {/* Main navigation links */}
          <Box
            sx={{
              display: 'flex',
              gap: 1,
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/"
            >
              Home
            </Button>
  
            <Button
              color="inherit"
              component={Link}
              to="/shows"
            >
              Shows
            </Button>
  
            <Button
              color="inherit"
              component={Link}
              to="/watchlist"
            >
              {/* Only show the count when at least one show is saved */}
              Watchlist
              {watchlist.length > 0 && ` (${watchlist.length})`}
            </Button>
  
            <Button
              color="inherit"
              component={Link}
              to="/about"
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    )
  }
  
  export default Navbar