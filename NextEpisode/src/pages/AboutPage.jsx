import {
    Box,
    Card,
    CardContent,
    Typography,
  } from '@mui/material'
  
  // AboutPage explains the purpose, data source and technologies used in the app.
  const AboutPage = () => {
    return (
      <Box>
        {/* Page heading */}
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
        >
          About NextEpisode
        </Typography>
  
        {/* Business context */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
            >
              Business Context
            </Typography>
  
            <Typography>
              NextEpisode is a TV show discovery application designed to
              help users find shows they may want to watch. Users can
              browse TV shows, search for specific titles, filter results
              by genre, view detailed show information, and save shows
              to a personal watchlist.
            </Typography>
          </CardContent>
        </Card>
  
        {/* Data source */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
            >
              Data Source
            </Typography>
  
            <Typography>
              TV show data is retrieved from the TVMaze API. The
              application uses the API to load lists of shows, search
              for shows by name, and retrieve detailed information for
              individual shows.
            </Typography>
          </CardContent>
        </Card>
  
        {/* React concepts */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
            >
              React Features
            </Typography>
  
            <Typography>
              The application uses React components, props, state,
              events, forms, conditional rendering, lists and keys,
              React Router, Context, custom hooks, useEffect,
              useNavigate and useParams.
            </Typography>
          </CardContent>
        </Card>
  
        {/* External libraries */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
            >
              External Libraries
            </Typography>
  
            <Typography>
              Material UI is used to provide reusable and consistent
              interface components such as cards, buttons, forms and
              navigation. React Router is used for client-side routing
              between pages.
            </Typography>
          </CardContent>
        </Card>
  
        {/* Future improvements */}
        <Card>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
            >
              Future Improvements
            </Typography>
  
            <Typography>
              Future versions of NextEpisode could include user
              accounts, personalised recommendations, episode tracking,
              user ratings, sorting options and additional watchlist
              categories such as Watching, Completed and Plan to Watch.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    )
  }
  
  export default AboutPage