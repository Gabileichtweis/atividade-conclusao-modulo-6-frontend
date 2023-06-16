import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form/Index';

const SingUp: React.FC = () => {
  return (
    <>
      <Grid
        container
        height={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          backgroundImage: 'url(./images/backgroundImage.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Grid
          item
          height={'70%'}
          xs={12}
          sm={8}
          md={5}
          sx={{ backgroundColor: '#6538cd9e', borderRadius: '5%' }}
        >
          <Grid container height={'100%'}>
            <Grid
              item
              height={'100%'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'space-around'}
              padding={3}
            >
              <Typography variant="h4" textAlign={'center'}>
                Cadastre-se
              </Typography>
              <Form type="singUp" />
              <Typography variant="body2" textAlign={'center'}>
                Já possui uma conta?{' '}
                <Link to="/" style={{ color: 'inherit' }}>
                  Retornar para login
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SingUp;
