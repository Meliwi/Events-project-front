import Head from 'next/head';
import { DashboardLayout } from '../../components/dashboard-layout';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from 'src/components/account/account-profile';
import CreateUserForm from 'src/components/forms/CreateUserForm';


const CrearUsuario = () => (
  <>
    <Head>
      <title>
        Usuarios
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
        <Typography sx={{ mb: 3 }} variant="h4" >
          Crear Usuario
        </Typography>

        <Grid container spacing={3} >
          <Grid item lg={4} md={6} xs={12} >
            <AccountProfile />
          </Grid>
          <Grid item lg={8} md={6} xs={12} >
            <CreateUserForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

CrearUsuario.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default CrearUsuario;