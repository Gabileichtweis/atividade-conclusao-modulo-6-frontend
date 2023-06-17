import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserLoged {
  email: string;
}

const initialState: UserLoged = {
  email: '',
};

const userLogedSlice = createSlice({
  name: 'userLoged',
  initialState,
  reducers: {
    setUserLoged: (state, action: PayloadAction<UserLoged>) => {
      return { email: action.payload.email };
    },
    removeUserLoged: () => {
      return initialState;
    },
  },
});

export const { setUserLoged, removeUserLoged } = userLogedSlice.actions;
export default userLogedSlice.reducer;
