import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  name: string;
  email: string;
  phone: string;
  isLogged: boolean;
  selectedContactId?: number;
};

type UserState = {
    user: User;
};

const initialState: UserState = {
  user: {
    name: '',
    email: '',
    phone: '',
    isLogged: false
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(
      state: UserState,
      action: PayloadAction<User>
    ) {
      state.user = (action.payload);
    },
    removeUser(
      state: UserState,
    ) {
      state.user = (initialState.user);
    },
    editSelectedContactId(
      state: UserState,
      action: PayloadAction<number>
    ) {
      state.user.selectedContactId = (action.payload);
    },
  },
});

export const { addUser, removeUser, editSelectedContactId } = userSlice.actions;

export default userSlice.reducer;