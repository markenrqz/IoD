import { Grid } from '@mui/material'
import ShowCard from './ShowCard'

// ShowList receives the array of shows from App through props.
const ShowList = ({ shows }) => {
  return (
    <Grid container spacing={3}>
      {/* Map through the shows and create a ShowCard for each one */}
      {shows.map((show) => (
        <Grid
          key={show.id}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
        >
          <ShowCard show={show} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ShowList