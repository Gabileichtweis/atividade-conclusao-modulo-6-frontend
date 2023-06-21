/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { Action } from '../../models/modal.model';
import { Note, NoteType } from '../../models/note.model';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  createNoteAction,
  deleteNoteAction,
  updateNotesAction,
} from '../../store/modules/Notes/notes.slice';
import { RootState } from '../../store/modules';

interface ModalProps {
  open: boolean;
  closeModal: () => void;
  action: Action;
  note?: Note;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  closeModal,
  action,
  note,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const userLoged = useSelector((state: RootState) => state.userLoged);

  useEffect(() => {
    if (note && action === 'update') {
      setTitle(note.title);
      setDescription(note.description);
    }
  }, [note, action]);

  const save = () => {
    alert('funcionalidade em fase de testes');
    /* switch (action) {
      case 'create':
        dispatch(
          createNoteAction({
             id está com erro dizendo que não fazia parte do escopo e não havia sido inicializado.
            Inicializei ele e o erro sumiu, porém, o id é gerado na api então não poderia ser inicializado assim ''
            email: userLoged.email,
            id: '',
            title,
            description,
            type: NoteType.overall,
          })
        );
        clear();
        break;

      case 'update':
        if (note) {
          dispatch(
            updateNotesAction({
              email: userLoged.email,
              id: '',
              description,
              title,
            })
          );
        }
        break;
      case 'delete':
        if (note) {
          dispatch(
            deleteNoteAction({
              email: userLoged.email,
              id: '',
            })
          );
        }
        break;
      default:
    }*/

    clear();
    closeModal();
  };

  const clear = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <Dialog
      open={open}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {action === 'create' && 'Criar recado'}
        {action === 'update' && 'Atualizar recado'}
        {action === 'delete' && 'Deletar recado'}
      </DialogTitle>
      <DialogContent>
        {action === 'delete' && (
          <DialogContentText id="alert-dialog-description">
            Tem certeza que deseja remover esse recado? A ação é irreversível.
          </DialogContentText>
        )}
        {action !== 'delete' && (
          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={12}>
              <TextField
                id="titulo"
                label={'Título'}
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="descricao"
                label={'Descrição'}
                value={description}
                onChange={(ev) => setDescription(ev.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>CANCELAR</Button>
        <Button onClick={save} autoFocus>
          SALVAR
        </Button>
      </DialogActions>
    </Dialog>
  );
};
