import Contact from "../Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContactById } from "../../redux/phonebook/operations";

function ContactList() {
  const contactsArray = useSelector((state) => state.phonebook.contacts);
  const filterValue = useSelector((state) => state.phonebook.filter);
  const dispatch = useDispatch();

  const deleteContactBtn = (id) => dispatch(deleteContactById(id));

  const getFilteredContacts = contactsArray.filter((el) =>
    el.name?.toLowerCase().includes(filterValue.toLowerCase())
  );

  const contactsList = getFilteredContacts.map(({ id, name, number }) => (
    <Contact
      key={id}
      id={id}
      name={name}
      number={number}
      deleteFunction={deleteContactBtn}
    />
  ));

  return <ul>{contactsList}</ul>;
}

export default ContactList;
