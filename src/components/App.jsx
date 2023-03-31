import { Notify } from 'notiflix';
import { Component } from 'react';
import { Contacts } from './contacts/Contacts';
import { Filter } from './filter/Filter';
import { Forma } from './forma/Forma';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = values => {
    const name = this.state.contacts.map(contact => contact.name);

    if (name.includes(values.name)) {
      Notify.warning(`${values.name} is already in contant`);
    } else {
      this.setState(prevState => ({
        contacts: [values, ...prevState.contacts],
      }));
    }
  };

  handleOnChange = e => {
    this.setState({ filter: e.target.value });
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normaliseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaliseFilter)
    );
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const contacts = this.getContacts();
    return (
      <Layout>
        <h1>Phonebook</h1>
        <Forma addContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleOnChange} />
        <Contacts
          contacts={contacts}
          deleteContact={this.handleDeleteContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
