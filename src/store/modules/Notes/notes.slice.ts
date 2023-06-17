import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  CreateNoteProps,
  DeleteNotesProps,
  ListNotesProps,
  Note,
  UpdateNotesProps,
} from '../../../models/note.model';
import { ApiService } from '../../../services/api.service';

export const listNotesAction = createAsyncThunk(
  'notes/list',
  async (props: ListNotesProps) => {
    const result = await ApiService.listNotes(props);

    return result;
  }
);

export const createNoteAction = createAsyncThunk(
  'notes/create',
  async (props: CreateNoteProps) => {
    const result = await ApiService.createNote(props);

    return result;
  }
);

export const deleteNoteAction = createAsyncThunk(
  'notes/delete',
  async (props: DeleteNotesProps) => {
    const result = await ApiService.deleteNote(props);

    return result;
  }
);

export const updateNotesAction = createAsyncThunk(
  'notes/update',
  async (props: UpdateNotesProps) => {
    const result = await ApiService.updateNotes(props);

    return result;
  }
);

export const notesSlice = createSlice({
  name: 'notes',
  initialState: [] as Note[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listNotesAction.fulfilled, (_, action) => {
      return action.payload.data?.notes ?? [];
    });

    builder.addCase(deleteNoteAction.fulfilled, (_, action) => {
      return action.payload.data ?? [];
    });

    builder.addCase(updateNotesAction.fulfilled, (_, action) => {
      return action.payload.data ?? [];
    });
  },
});

export default notesSlice.reducer;
