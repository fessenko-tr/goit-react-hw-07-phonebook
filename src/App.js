import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/phonebook/operations";
function App() {
  const contacts = useSelector((state) => state.phonebook.contacts);
  const isLoading = useSelector((state) => state.phonebook.isLoading);
  const error = useSelector((state) => state.phonebook.error);
  const dispatch = useDispatch();

  const noContactsAdded = "You seem not to have any contacts yet";

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {error && <p>Something went wrong, try again later</p>}
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification msg={noContactsAdded} />
      )}
      {isLoading && <p>Your request is being processed</p>}

      <ToastContainer />
    </>
  );
}

export default App;
