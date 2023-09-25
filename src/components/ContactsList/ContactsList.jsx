import { DeleteButton, Item, List } from './ContactsList.styled';
import { FaTrashAlt } from 'react-icons/fa';

const ContactsList = ({ contacts, filter, handleDeletedContact }) => {
  return (
    <List>
      {contacts
        .filter(
          contact =>
            filter === '' ||
            contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <Item key={contact.id}>
            <p>{`${contact.name}: ${contact.number} ${
              contact.type ? `*${contact.type}*` : ''
            }`}</p>
            <DeleteButton
              type="button"
              onClick={() => handleDeletedContact(contact.id)}
            >
              <FaTrashAlt />
            </DeleteButton>
          </Item>
        ))}
    </List>
  );
};

export default ContactsList;
