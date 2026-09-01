import {
    Box,
    Button,
    Grid,
    Typography,
  } from '@mui/material'
  import { useNavigate } from 'react-router-dom'
  import ShowCard from '../components/ShowCard'
  import { useShows } from '../hooks/useShows'
  
  // HomePage introduces the application and displays a small selection of shows.
  const HomePage = () => {
    // useNavigate allows navigation from a button click.
    const navigate = useNavigate()
  
    // Reuse the custom hook to load TV shows from the API.
    const { shows, loading, error } = useShows()
  
    // Display only the first four shows as featured shows.
    const featuredShows = shows.slice(0, 4)
  
    // Navigate to the main Shows page.
    const handleBrowseShows = () => {
      navigate('/shows')
    }
  
    return (
      <Box>
        {/* Hero section */}
        <Box
          sx={{
            textAlign: 'center',
            py: 6,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
          >
            NextEpisode
          </Typography>
  
          <Typography
            variant="h5"
            component="p"
            sx={{ mb: 3 }}
          >
            Discover your next favourite TV show.
          </Typography>
  
          {/* Navigate users to the full TV show catalogue */}
          <Button
            variant="contained"
            size="large"
            onClick={handleBrowseShows}
          >
            Browse Shows
          </Button>
        </Box>
  
        {/* Featured shows section */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
          >
            Featured Shows
          </Typography>
  
          {/* Display a loading message while waiting for the API */}
          {loading && (
            <Typography>
              Loading featured shows...
            </Typography>
          )}
  
          {/* Display an error message if the API request fails */}
          {error && (
            <Typography>
              {error}
            </Typography>
          )}
  
          {/* Display the featured shows after the API request completes */}
          {!loading && !error && (
            <Grid container spacing={3}>
              {featuredShows.map((show) => (
                <Grid
                  key={show.id}
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 3,
                  }}
                >
                  <ShowCard show={show} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    )
  }
  
  export default HomePage