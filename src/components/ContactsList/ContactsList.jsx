import { List, Item, Button } from './ContactsList.styled';
import { useSelector } from 'react-redux/es/exports';
import PropTypes from 'prop-types';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <List>
      {contacts.map(({ id, number, name }) => (
        <Item key={id}>
          <p>
            {name}: {number}
          </p>
          <Button type="button">Delete contact</Button>
        </Item>
      ))}
    </List>
  );
};
