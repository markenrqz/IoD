import {
    Box,
    Button,
    Typography,
  } from '@mui/material'
  import { useNavigate } from 'react-router-dom'
  
  // NotFoundPage is displayed when no application route matches the URL.
  const NotFoundPage = () => {
    // useNavigate allows the user to return to the home page.
    const navigate = useNavigate()
  
    // Navigate back to the application home page.
    const handleGoHome = () => {
      navigate('/')
    }
  
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
        }}
      >
        {/* Error code */}
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
        >
          404
        </Typography>
  
        {/* Explain that the requested page does not exist. */}
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
        >
          Page Not Found
        </Typography>
  
        <Typography sx={{ mb: 3 }}>
          The page you are looking for does not exist.
        </Typography>
  
        {/* Return the user to the home page. */}
        <Button
          variant="contained"
          onClick={handleGoHome}
        >
          Back to Home
        </Button>
      </Box>
    )
  }
  
  export default NotFoundPage