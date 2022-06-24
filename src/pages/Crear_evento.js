import Head from 'next/head';
import { Box, Divider ,Container, Grid, Typography } from '@mui/material';
import MapComponent from '../components/map/map';
import { EventDetails } from '../components/event/event-profile-details';
import { DashboardLayout } from '../components/dashboard-layout';


const CreateEvent = () => {
  const {MapRender, getPlace} = MapComponent(); 
  const mapsCard = MapRender();
  return(
  <>
    <Head>
      <title>
        Eventos
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Divider/>
            {mapsCard}
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <EventDetails  eventPlace={getPlace} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);}

CreateEvent.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default CreateEvent;