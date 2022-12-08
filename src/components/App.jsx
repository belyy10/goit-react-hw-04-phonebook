import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export default function App() {
  return (
    <>
      <Container>
        <h1>PhoneBook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {/* <Filter value={filter} onChange={changeFilter} /> */}
        <ContactsList />
      </Container>
    </>
  );
}

// const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
// const [filter, setFilter] = useState('');

// const addContacts = ({ name, number }) => {
//   const contact = {
//     id: nanoid(),
//     name,
//     number,
//   };

//   if (
//     contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     )
//   )
//     alert(`${name} is already in contact`);
//   else {
//     return setContacts(prevState => [...prevState.contacts, contact]);
//   }
// };

// const deleteContact = contactId => {
//   setContacts(prevState =>
//     prevState.filter(contact => contact.id !== contactId)
//   );
// };

// const changeFilter = e => {
//   setFilter(e.currentTarget.value);
// };
// const getVisibleContact = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(filter.toLowerCase())
// );
