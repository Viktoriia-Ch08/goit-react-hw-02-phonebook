const ContactsList = ({ contacts, filter, handleDeletedContact }) => {
  return (
    <ul>
      {contacts
        .filter(
          contact =>
            filter === '' ||
            contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <li key={contact.id}>
            <p>{`${contact.name}: ${contact.number}`}</p>
            <button
              type="button"
              onClick={() => handleDeletedContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactsList;
