import { createAsyncThunk } from "@reduxjs/toolkit";
import MockAPI from "../../api/mockAPI/mockAPI";

export const fetchContacts = createAsyncThunk(
  "contacts/FetchContacts",
  async () => {
    const contacts = await MockAPI.get("/contacts");

    return contacts.data;
  }
);

export const deleteContactById = createAsyncThunk(
  "contacts/DeleteConctact",
  async (id) => {
    const deletedContact = await MockAPI.delete(`/contacts/${id}`);

    return deletedContact.data.id;
  }
);

export const addContact = createAsyncThunk(
  "contacts/AddContact",
  async (contact) => {
    const addedContact = await MockAPI.post("/contacts", contact);

    return addedContact.data;
  }
);
