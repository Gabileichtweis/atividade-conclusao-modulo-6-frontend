import { Note } from './note.model';

export interface User {
  email: string;
  password: string;
  notes: Note[];
}

export interface LoginProps {
  email: string;
  password: string;
}
