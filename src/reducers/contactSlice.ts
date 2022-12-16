import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

type Contact = {
  name: string;
  email: string;
  phone: string;
  isFavorite: boolean;
};

type ContactState = {
  contact: Contact;
};

const initialState: ContactState = {
  contact: {
    name: '',
    email: '',
    phone: '',
    isFavorite: false
  }
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(
      state: ContactState,
      action: PayloadAction<Contact>
    ) {
      state.contact = (action.payload);
    },
    removeContact(
      state: ContactState,
    ) {
      state.contact = (initialState.contact);
    }
  },
});

export const { addContact, removeContact } = contactSlice.actions;

export default contactSlice.reducer;

// export const selectContact = (state: RootState) => state.contact;