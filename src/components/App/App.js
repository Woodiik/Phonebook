import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList/ContactList';
import { Container } from './App.styled';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export function App() {
  //const isFirstRender = useRef(true);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    //if (isFirstRender.current) {
    //  isFirstRender.current = false;
    //  return;
    //}

    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {contacts.items ?? <ContactList />}
    </Container>
  );
}
