import { Header } from '../components/Header'
import { Nokogiri } from '../components/Nokogiri'
import { BodyContainer } from '../components/BodyContainer'
import { Grid } from '@mui/material'

export const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <BodyContainer>
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <Nokogiri />
          </Grid>
          <Grid xs={12} md={6}>
            <Nokogiri />
          </Grid>
        </Grid>
      </BodyContainer>
    </>
  )
}

export default Home
