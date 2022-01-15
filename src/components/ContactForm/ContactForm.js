import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import s from "./ContactForm.module.css";
import initialState from "./initialState";
import { addContact } from "../../redux/phonebook/operations";
import isAlreadyAdded from "./isAlreadyAdded-function";

function ContactForm() {
  const [state, dispatchState] = useReducer(handleChange, initialState);
  const dispatch = useDispatch();
  const contactsArray = useSelector((state) => state.phonebook.contacts);

  function handleChange(state, action) {
    const { option, value } = action;

    if (option === "reset") {
      return initialState;
    }

    return { ...state, [option]: value };
  }

  function submitNewContact(e) {
    const { name } = state;

    e.preventDefault();

    if (isAlreadyAdded(contactsArray, name)) {
      toast.info(`${name} has already been added`);
      dispatchState({ option: "reset" });
      return;
    }

    dispatch(addContact(state));
    dispatchState({ option: "reset" });
  }

  return (
    <form onSubmit={submitNewContact} className={s.form}>
      <label className={s.label} htmlFor="name">
        Name
      </label>
      <input
        className={s.input}
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={state.name}
        onChange={(e) => {
          const { name, value } = e.currentTarget;
          dispatchState({ option: name, value });
        }}
      />
      <label className={s.label} htmlFor="number">
        Number
      </label>
      <input
        className={s.input}
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={state.number}
        onChange={(e) => {
          const { name, value } = e.currentTarget;
          dispatchState({ option: name, value });
        }}
      />

      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
