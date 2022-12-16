import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  name: string;
  email: string;
  phone: string;
  isLogged: boolean;
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
    }
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;