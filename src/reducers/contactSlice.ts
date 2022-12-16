import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

type Contact = {
  name: string;
  email: string;
  phone: string;
  isFavorite: boolean;
};

const initialState = [] as Contact[];


export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      state.push(action.payload);
    },
    removeContact(state, action: PayloadAction<string>) {
      state = initialState;
      const index = state.findIndex((contact) => contact.email === action.payload);
      state.splice(index, 1);
    },
    editContact(
      state,
      action: PayloadAction<Contact>
    ) {
      const index = state.findIndex((contact) => contact.email === action.payload.email);
      state[index].name = action.payload.name;
      state[index].email = action.payload.email;
      state[index].phone = action.payload.phone;
      state[index].isFavorite = action.payload.isFavorite;
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;

export default contactSlice.reducer;

// export const selectContact = (state: RootState) => state.contact;