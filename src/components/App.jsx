import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import useLocalStorage from 'hooks/useLocalStorage';

export default function App() {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');

  const addContacts = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      alert(`${name} is already in contact`);
    else {
      return setContacts(prevState => [...prevState.contacts, contact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const getVisibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Container>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={addContacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList contacts={getVisibleContact} onRemove={deleteContact} />
      </Container>
    </>
  );
}
