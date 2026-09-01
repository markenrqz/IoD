import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
  } from '@mui/material'
  import { useNavigate } from 'react-router-dom'
  import { useWatchlist } from '../context/WatchlistContext'
  
  // ShowCard displays the information and actions for one TV show.
  const ShowCard = ({ show }) => {
    // useNavigate allows navigation to the selected show's details page.
    const navigate = useNavigate()
  
    // Access shared watchlist functions from Context.
    const {
      addToWatchlist,
      removeFromWatchlist,
      isInWatchlist,
    } = useWatchlist()
  
    // Check whether this show is already saved.
    const saved = isInWatchlist(show.id)
  
    // Navigate to the details page for this show.
    const handleViewDetails = () => {
      navigate(`/shows/${show.id}`)
    }
  
    // Add or remove the show depending on its current watchlist state.
    const handleWatchlist = () => {
      if (saved) {
        removeFromWatchlist(show.id)
      } else {
        addToWatchlist(show)
      }
    }
  
    return (
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Display the show's image if one is available. */}
        {show.image ? (
          <CardMedia
            component="img"
            height="320"
            image={show.image.medium}
            alt={show.name}
            sx={{
              objectFit: 'cover',
            }}
          />
        ) : (
          <Box
            sx={{
              height: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography>
              No image available
            </Typography>
          </Box>
        )}
  
        {/* flexGrow keeps the card content area a consistent height. */}
        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Show title */}
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
          >
            {show.name}
          </Typography>
  
          {/* Show genres */}
          <Typography
            variant="body2"
            sx={{ mb: 1 }}
          >
            <strong>Genres:</strong>{' '}
            {show.genres.length > 0
              ? show.genres.join(', ')
              : 'N/A'}
          </Typography>
  
          {/* Show rating */}
          <Typography
            variant="body2"
            sx={{ mb: 2 }}
          >
            <strong>Rating:</strong>{' '}
            {show.rating.average || 'N/A'}
          </Typography>
  
          {/* Push the action buttons to the bottom of every card. */}
          <Box
            sx={{
              mt: 'auto',
              display: 'flex',
              gap: 1,
              flexWrap: 'wrap',
            }}
          >
            {/* Navigate to the selected show's details page. */}
            <Button
              variant="contained"
              onClick={handleViewDetails}
            >
              View Details
            </Button>
  
            {/* Add or remove the show from the watchlist. */}
            <Button
              variant={saved ? 'outlined' : 'contained'}
              onClick={handleWatchlist}
            >
              {saved ? 'Remove' : 'Watchlist'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    )
  }
  
  export default ShowCard