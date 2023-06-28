import { Note, NoteType } from '../../models/note.model';
import React, { useState } from 'react';
import { Action } from '../../models/modal.model';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Delete, Edit, Folder, FolderOff } from '@mui/icons-material';
import { Modal } from '../Modal/Index';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteNoteAction,
  listNotesAction,
  updateNotesAction,
} from '../../store/modules/Notes/notes.slice';
import { RootState } from '../../store/modules';

interface NotesProps {
  note: Note;
}

export const NotesList: React.FC<NotesProps> = ({ note }) => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState<Action>('update');

  const userLoged = useSelector((state: RootState) => state.userLoged);
  const dispatch = useDispatch<any>();

  const openModal = (action: Action) => {
    setAction(action);
    setOpen(true);
  };

  const changeType = (id: string, oldType: NoteType) => {
    const type =
      oldType == NoteType.overall ? NoteType.archived : NoteType.overall;

    dispatch(
      updateNotesAction({
        email: userLoged.email,
        id,
        type,
      })
    );

    dispatch(listNotesAction({ email: userLoged.email, type: note.type }));
  };

  const deleteNote = (id: string) => {
    dispatch(deleteNoteAction({ email: userLoged.email, id: id }));
    dispatch(
      listNotesAction({ email: userLoged.email, type: NoteType.overall })
    );
  };

  return (
    <>
      <List>
        <ListItem>
          <ListItemText primary={note.title} secondary={note.description} />
          <IconButton
            color="primary"
            aria-label="Editar recado"
            onClick={() => openModal('update')}
          >
            <Edit />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Deletar recado"
            onClick={() => deleteNote(note.id)}
          >
            <Delete />
          </IconButton>
          <IconButton
            color="primary"
            aria-label={
              note.type === 'O' ? 'Arquivar recado' : 'Desarquivar Recado'
            }
            onClick={() => changeType(note.id, note.type)}
          >
            {note.type === 'O' ? <Folder /> : <FolderOff />}
          </IconButton>
        </ListItem>
        <Divider component={'li'} />
      </List>

      <Modal
        open={open}
        action={action}
        closeModal={() => setOpen(false)}
        note={note}
      />
    </>
  );
};
