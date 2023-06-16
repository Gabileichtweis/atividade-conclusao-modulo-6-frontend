export enum NoteType {
  archived = 'A',
  overall = 'O',
}

export interface Note {
  id: string;
  title: number;
  Description: string;
  type: NoteType;
}

export interface DeleteNotesProps {
  email: string;
  idNote: string;
}

export interface UpdateNotesProps {
  email: string;
  idNote: string;
  title?: string;
  description?: string;
  type?: NoteType;
}

export interface ListNotesProps {
  email: string;
  type: NoteType;
}
