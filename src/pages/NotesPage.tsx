import { Grid, Typography, Button, Divider, Fab, Modal } from '@mui/material';
import React from 'react';

const Notes: React.FC = () => {
  return (
    <>
      {/* ARRUMAR BUG DA IMAGEM */}
      <Grid
        container
        height={'100vh'}
        display={'flex'}
        justifyContent={'center'}
        sx={{
          backgroundImage: 'url(./images/backgroundImage.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Grid item xs={12} sm={10} md={8}>
          <Grid
            container
            display={'flex'}
            justifyContent={'center'}
            marginTop={2}
            marginBottom={2}
            sx={{ backgroundColor: '#6538cd9e', borderRadius: '2%' }}
          >
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Typography variant="h3" color={'primary'}>
                Recados
              </Typography>
              <Button>SAIR</Button>
            </Grid>
            <Divider />
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              display={'flex'}
              alignItems={'flex-start'}
            >
              <Grid container>
                RECADO
                {/*  {recados
                  .filter((recado) => recado.criadoPor === usuarioLogado.email)
                  .map((recado) => (
                    <Grid item key={recado.id} xs={12}>
                      <ListaRecados recado={recado} />
                    </Grid>
                  ))} */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Fab
        color="primary"
        aria-label="Adicionar novo contato"
        sx={{ position: 'fixed', right: '30px', bottom: '30px' }}
      >
        {/* ICONE ADD */}
      </Fab>

      {/* <Modal aberto={abertura} acao="criar" fecharModal={fecharModal} /> */}
    </>
  );
};

export default Notes;
