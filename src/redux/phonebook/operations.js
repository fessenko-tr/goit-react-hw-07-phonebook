import { createAsyncThunk } from "@reduxjs/toolkit";
import MockAPI from "../../api/mockAPI/mockAPI";

export const fetchContacts = createAsyncThunk(
  "contacts/FetchContacts",
  async (thunkAPI) => {
    try {
      const contacts = await MockAPI.get("/contacts");
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  "contacts/DeleteConctact",
  async (id, thunkAPI) => {
    try {
      const deletedContact = await MockAPI.delete(`/contacts/${id}`);
      return deletedContact.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/AddContact",
  async (contact, thunkAPI) => {
    try {
      const addedContact = await MockAPI.post("/contacts", contact);
      return addedContact.data;
    } catch (error) {
      console.dir(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
