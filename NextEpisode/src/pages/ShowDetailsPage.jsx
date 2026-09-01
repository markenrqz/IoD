import { useEffect, useState } from 'react'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useWatchlist } from '../context/WatchlistContext'

// ShowDetailsPage displays more information about one selected TV show.
const ShowDetailsPage = () => {
  // Get the dynamic show ID from the URL.
  const { id } = useParams()

  // useNavigate allows navigation back to the previous page.
  const navigate = useNavigate()

  // Access the shared watchlist functions from Context.
  const {
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
  } = useWatchlist()

  // Store the selected show's data.
  const [show, setShow] = useState(null)

  // Track whether the API request is still loading.
  const [loading, setLoading] = useState(true)

  // Store an error message if the request fails.
  const [error, setError] = useState('')

  // Fetch the selected TV show whenever the ID changes.
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        // Throw an error if the show cannot be loaded.
        if (!response.ok) {
          throw new Error('Unable to load this TV show.')
        }

        return response.json()
      })
      .then((data) => {
        // Store the selected show's information.
        setShow(data)

        // Mark the request as complete.
        setLoading(false)
      })
      .catch((error) => {
        // Store the error message for display.
        setError(error.message)

        // Mark the request as complete even though it failed.
        setLoading(false)
      })
  }, [id])

  // Check whether the current show is already in the watchlist.
  const saved = show ? isInWatchlist(show.id) : false

  // Add or remove the current show from the watchlist.
  const handleWatchlist = () => {
    if (!show) {
      return
    }

    if (saved) {
      removeFromWatchlist(show.id)
    } else {
      addToWatchlist(show)
    }
  }

  // Remove HTML tags from the TVMaze summary before displaying it.
  const cleanSummary = show?.summary
    ? show.summary.replace(/<[^>]*>/g, '')
    : 'No summary available.'

  return (
    <Box>
      {/* Display a loading spinner while waiting for the API. */}
      {loading && <CircularProgress />}

      {/* Display an error if the request fails. */}
      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      {/* Display the selected show's details. */}
      {!loading && !error && show && (
        <>
          {/* Navigation and watchlist controls */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              mb: 3,
              flexWrap: 'wrap',
            }}
          >
            {/* Return to the previous page. */}
            <Button
              variant="outlined"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>

            {/* Add or remove this show from the watchlist. */}
            <Button
              variant="contained"
              onClick={handleWatchlist}
            >
              {saved ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: 4,
              flexWrap: 'wrap',
            }}
          >
            {/* Display the show's larger image if available. */}
            {show.image ? (
              <Box
                component="img"
                src={show.image.original}
                alt={show.name}
                sx={{
                  width: 300,
                  maxWidth: '100%',
                }}
              />
            ) : (
              <Typography>
                No image available.
              </Typography>
            )}

            {/* Display detailed TV show information. */}
            <Box sx={{ flex: 1, minWidth: 280 }}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
              >
                {show.name}
              </Typography>

              <Typography sx={{ mb: 1 }}>
                <strong>Type:</strong>{' '}
                {show.type || 'N/A'}
              </Typography>

              <Typography sx={{ mb: 1 }}>
                <strong>Language:</strong>{' '}
                {show.language || 'N/A'}
              </Typography>

              <Typography sx={{ mb: 1 }}>
                <strong>Genres:</strong>{' '}
                {show.genres.length > 0
                  ? show.genres.join(', ')
                  : 'N/A'}
              </Typography>

              <Typography sx={{ mb: 1 }}>
                <strong>Status:</strong>{' '}
                {show.status || 'N/A'}
              </Typography>

              <Typography sx={{ mb: 1 }}>
                <strong>Premiered:</strong>{' '}
                {show.premiered || 'N/A'}
              </Typography>

              <Typography sx={{ mb: 1 }}>
                <strong>Rating:</strong>{' '}
                {show.rating.average || 'N/A'}
              </Typography>

              {/* Display the cleaned show summary. */}
              <Typography sx={{ mt: 3 }}>
                {cleanSummary}
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  )
}

export default ShowDetailsPage