import { combineReducers } from '@reduxjs/toolkit';
import UserLogedReducer from './UserLoged/UserLoged.slice';
import notesReducer from './Notes/notes.slice';
import userReducer from './Users/user.slice';

export const combinedReducers = combineReducers({
  notes: notesReducer,
  userLoged: UserLogedReducer,
  user: userReducer,
});
