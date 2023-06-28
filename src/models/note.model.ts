export enum NoteType {
  archived = 'A',
  overall = 'O',
}

export interface Note {
  id: string;
  title: string;
  description: string;
  type: NoteType;
}

export interface CreateNoteProps {
  email: string;
  title: string;
  description: string;
  type: NoteType;
}

export interface DeleteNotesProps {
  email: string;
  id: string;
}

export interface UpdateNotesProps {
  email: string;
  id: string;
  title?: string;
  description?: string;
  type?: NoteType;
}

export interface ListNotesProps {
  email: string;
  type: NoteType;
}
