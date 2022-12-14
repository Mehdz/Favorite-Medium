import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../constants/types';

const initialState = [] as Contact[];


export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      const data = action.payload;

      data.id = (state[state?.length - 1]?.id || 0) + 1;
      state.push(data);
    },
    removeContact(state, action: PayloadAction<number>) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      if (index > -1)
        state.splice(index, 1);
    },
    editContact(
      state,
      action: PayloadAction<Contact>
    ) {
      const index = state.findIndex((contact) => contact.id === action.payload.id);

      if (index > -1) {
        state[index].name = action.payload.name;
        state[index].email = action.payload.email;
        state[index].phone = action.payload.phone;
        state[index].isFavorite = action.payload.isFavorite;
      }
    },
    editFav(
      state,
      action: PayloadAction<number>
    ) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      if (index > -1)
        state[index].isFavorite = !state[index].isFavorite;
    },

  },
});

export const { addContact, removeContact, editContact, editFav } = contactSlice.actions;

export default contactSlice.reducer;