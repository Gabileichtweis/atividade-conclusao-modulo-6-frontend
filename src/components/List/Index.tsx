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

interface NotesProps {
  note: Note;
}

export const NotesList: React.FC<NotesProps> = ({ note }) => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState<Action>('update');
  const [type, setType] = useState<NoteType>(note.type);

  const openModal = (action: Action) => {
    setAction(action);
    setOpen(true);
  };

  const changeType = (type: NoteType) => {
    //Lógica mudar de arquivado para desarquivado
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
            onClick={() => openModal('delete')}
          >
            <Delete />
          </IconButton>
          <IconButton
            color="primary"
            aria-label={
              note.type === 'O' ? 'Arquivar recado' : 'Desarquivar Recado'
            }
            onClick={() => changeType(note.type)}
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
