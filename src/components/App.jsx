import Contacts from '../components/contacts/ContactsList';
import { Component } from 'react';
import UserForm from '../components/userForm/UserForm';
import { Filter } from '../components/filter/Filter';
import { Section } from './section/Section';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    //console.log('didmount');
    const contactsUser = localStorage.getItem('contacts');
    const parsedContactsUser = JSON.parse(contactsUser);
    if (parsedContactsUser) {
      this.setState({ contacts: parsedContactsUser });
    }
    //console.log(parsedContactsUser);
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('didUpdate');
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContactsUser = newContact => {
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    const visibleContacts = this.filterContacts();
    return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <UserForm
            onSubmit={this.addContactsUser}
            contacts={this.state.contacts}
          />

          <h2>Contacts</h2>
          <Filter onFilter={this.onFilter} filter={this.state.filter} />

          <Contacts
            filter={this.state.filter}
            deleteContact={this.deleteContact}
            filterContacts={visibleContacts}
          />
        </Section>
      </>
    );
  }
}

export default App;
