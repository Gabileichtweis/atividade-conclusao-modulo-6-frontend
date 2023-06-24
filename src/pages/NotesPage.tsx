import { Grid, Typography, Button, Divider, Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Note, NoteType } from '../models/note.model';
import { useNavigate } from 'react-router-dom';
import { removeUserLoged } from '../store/modules/UserLoged/UserLoged.slice';
import { NotesList } from '../components/List/Index';
import { Add } from '@mui/icons-material';
import { Modal } from '../components/Modal/Index';
import { RootState } from '../store/modules';
import { listNotesAction } from '../store/modules/Notes/notes.slice';

const Notes: React.FC = () => {
  const [open, setOpen] = useState(false);

  const userLoged = useSelector((state: RootState) => state.userLoged);
  const notes = useSelector((state: RootState) => state.notes);

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      listNotesAction({
        email: userLoged.email,
        type: NoteType['overall'],
      })
    );
  }, []);

  const listNotes = (type: NoteType) => {
    dispatch(
      listNotesAction({
        email: userLoged.email,
        type,
      })
    );
  };

  const closeModal = () => {
    setOpen(false);
  };

  const exit = () => {
    alert('Funcionalidade ainda não disponível');
    /* dispatch(removeUserLoged());
    navigate('/'); */
  };

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
              <Button onClick={() => listNotes(NoteType.archived)}>
                ARQUIVADOS
              </Button>
              <Button onClick={() => listNotes(NoteType.overall)}>
                DESARQUIVADAS
              </Button>
              <Button onClick={exit}>SAIR</Button>
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
                {notes.map((note: Note) => (
                  <Grid item key={note.id} xs={12}>
                    <NotesList note={note} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Fab
        color="primary"
        aria-label="Adicionar novo recado"
        sx={{ position: 'fixed', right: '30px', bottom: '30px' }}
        onClick={() => setOpen(true)}
      >
        <Add />
      </Fab>

      <Modal action="create" open={open} closeModal={closeModal} />
    </>
  );
};

export default Notes;
