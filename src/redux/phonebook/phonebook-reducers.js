import { updateFilter } from "./phonebook-actions";
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { fetchContacts, deleteContactById, addContact } from "./operations";

const contacts = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContactById.fulfilled]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
  [fetchContacts.fulfilled]: (_, { payload }) => [...payload],
});

const filter = createReducer("", {
  [updateFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContactById.pending]: () => true,
  [deleteContactById.fulfilled]: () => false,
  [deleteContactById.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [addContact.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [deleteContactById.pending]: () => null,
  [deleteContactById.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [fetchContacts.rejected]: (_, { payload }) => payload,
});

export const phonebookReducer = combineReducers({
  contacts,
  filter,
  isLoading,
  error,
});
