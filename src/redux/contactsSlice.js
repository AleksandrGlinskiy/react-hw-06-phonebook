import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: "",
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      return state.contacts.filter(contact => contact.id !== action.payload);
    },
    filterContacts(state,action) {
      state.filter = action.payload
    }
  },
});

export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
