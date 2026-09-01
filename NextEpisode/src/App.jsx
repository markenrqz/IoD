import { Container } from '@mui/material'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

// App controls the overall layout of the NextEpisode application.
const App = () => {
  return (
    <>
      {/* Display the navigation bar on every page. */}
      <Navbar />

      {/* Main application content */}
      <Container
        maxWidth="xl"
        sx={{ py: 4 }}
      >
        {/* Render the page that matches the current URL. */}
        <AppRoutes />
      </Container>
    </>
  )
}

export default App