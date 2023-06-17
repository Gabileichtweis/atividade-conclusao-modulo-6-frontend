import { combineReducers } from '@reduxjs/toolkit';
import notesSlice from './Notes/notes.slice';
import UserLogedSlice from './UserLoged/UserLoged.slice';

const combinedReducers = combineReducers({
  note: notesSlice,
  userLoged: UserLogedSlice,
});

export default combinedReducers;
