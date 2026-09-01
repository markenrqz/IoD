import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import ShowList from '../components/ShowList'
import { useShows } from '../hooks/useShows'

// ShowsPage displays, searches, filters, sorts and paginates TV shows.
const ShowsPage = () => {
  // Store the current value typed into the search field.
  const [searchTerm, setSearchTerm] = useState('')

  // Store the submitted search query used by the API.
  const [searchQuery, setSearchQuery] = useState('')

  // Store the genre selected by the user.
  const [selectedGenre, setSelectedGenre] = useState('All')

  // Store the selected sorting option.
  const [sortOption, setSortOption] = useState('default')

  // Store the current TVMaze browse page.
  const [page, setPage] = useState(1)

  // Fetch shows using either the current search query or browse page.
  const { shows, loading, error } = useShows(searchQuery, page)

  // Create a unique list of genres from the returned shows.
  const genres = [
    'All',
    ...new Set(shows.flatMap((show) => show.genres)),
  ]

  // Filter the returned shows using the selected genre.
  const filteredShows = shows.filter((show) => {
    return (
      selectedGenre === 'All' ||
      show.genres.includes(selectedGenre)
    )
  })

  // Create a copy of the filtered array before sorting it.
  const sortedShows = [...filteredShows].sort((a, b) => {
    // Sort TV shows alphabetically from A to Z.
    if (sortOption === 'name-asc') {
      return a.name.localeCompare(b.name)
    }

    // Sort TV shows alphabetically from Z to A.
    if (sortOption === 'name-desc') {
      return b.name.localeCompare(a.name)
    }

    // Sort TV shows from highest rating to lowest rating.
    if (sortOption === 'rating-desc') {
      return (b.rating.average || 0) - (a.rating.average || 0)
    }

    // Sort TV shows from lowest rating to highest rating.
    if (sortOption === 'rating-asc') {
      return (a.rating.average || 0) - (b.rating.average || 0)
    }

    // Keep the original API order by default.
    return 0
  })

  // Submit the search form and update the API search query.
  const handleSearch = (event) => {
    // Prevent the browser from refreshing when the form is submitted.
    event.preventDefault()

    // Use the typed text as the new API search query.
    setSearchQuery(searchTerm.trim())

    // Reset filters for the new search results.
    setSelectedGenre('All')
    setSortOption('default')
  }

  // Clear the search and return to the standard TV show catalogue.
  const handleClearSearch = () => {
    setSearchTerm('')
    setSearchQuery('')
    setSelectedGenre('All')
    setSortOption('default')
    setPage(1)
  }

  return (
    <Box>
      {/* Page heading */}
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
      >
        Browse TV Shows
      </Typography>

      {/* Search and filter controls */}
      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          mt: 3,
        }}
      >
        {/* Controlled search field */}
        <TextField
          label="Search TV shows"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />

        {/* Submit the search form */}
        <Button
          type="submit"
          variant="contained"
        >
          Search
        </Button>

        {/* Clear the current search */}
        {searchQuery && (
          <Button
            variant="outlined"
            onClick={handleClearSearch}
          >
            Clear
          </Button>
        )}

        {/* Controlled genre filter */}
        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel id="genre-label">
            Genre
          </InputLabel>

          <Select
            labelId="genre-label"
            value={selectedGenre}
            label="Genre"
            onChange={(event) =>
              setSelectedGenre(event.target.value)
            }
          >
            {/* Create an option for each available genre */}
            {genres.map((genre) => (
              <MenuItem
                key={genre}
                value={genre}
              >
                {genre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Controlled sorting dropdown */}
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="sort-label">
            Sort By
          </InputLabel>

          <Select
            labelId="sort-label"
            value={sortOption}
            label="Sort By"
            onChange={(event) =>
              setSortOption(event.target.value)
            }
          >
            <MenuItem value="default">
              Default
            </MenuItem>

            <MenuItem value="name-asc">
              Name: A to Z
            </MenuItem>

            <MenuItem value="name-desc">
              Name: Z to A
            </MenuItem>

            <MenuItem value="rating-desc">
              Rating: Highest First
            </MenuItem>

            <MenuItem value="rating-asc">
              Rating: Lowest First
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Show the active API search query */}
      {searchQuery && (
        <Typography sx={{ mt: 3 }}>
          Search results for:{' '}
          <strong>{searchQuery}</strong>
        </Typography>
      )}

      {/* Display loading feedback while waiting for the API */}
      {loading && (
        <Box sx={{ mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {/* Display an error if the API request fails */}
      {error && (
        <Alert severity="error" sx={{ mt: 3 }}>
          {error}
        </Alert>
      )}

      {/* Display matching and sorted TV shows */}
      {!loading && !error && sortedShows.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <ShowList shows={sortedShows} />

          {/* Only show pagination while browsing, not while searching */}
          {!searchQuery && (
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
              }}
            >
              {/* Move to the previous API page */}
              <Button
                variant="outlined"
                disabled={page <= 0}
                onClick={() =>
                  setPage((currentPage) => currentPage - 1)
                }
              >
                Previous
              </Button>

              {/* Display the current API page number */}
              <Typography>
                Page {page}
              </Typography>

              {/* Move to the next API page */}
              <Button
                variant="contained"
                onClick={() =>
                  setPage((currentPage) => currentPage + 1)
                }
              >
                Next
              </Button>
            </Box>
          )}
        </Box>
      )}

      {/* Display feedback when no shows are found */}
      {!loading && !error && sortedShows.length === 0 && (
        <Typography sx={{ mt: 4 }}>
          No TV shows found.
        </Typography>
      )}
    </Box>
  )
}

export default ShowsPage