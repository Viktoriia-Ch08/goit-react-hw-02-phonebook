import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitData = data => {
    this.state.contacts.some(element => element.name === data.name)
      ? alert('This contact has already exists')
      : this.setState({
          contacts: [...this.state.contacts, data],
        });
  };

  filterInputNames = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  checkExistingContact = data => {
    this.state.contacts.name === data.name
      ? alert('This contact has already existed')
      : this.setState({
          contacts: [...this.state.contacts, data],
        });
  };

  deleteContact = id => {
    this.setState(() => {
      return {
        contacts: this.state.contacts.filter(element => element.id !== id),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterInputNames} />
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleDeletedContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default Phonebook;
