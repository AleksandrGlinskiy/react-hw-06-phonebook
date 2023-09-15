import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactList.module.css';
export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilter);

  const removeContact = id => dispatch(deleteContact(id));
  

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  console.log(visibleContacts)

  
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <span className={css.nameNumber}>{name}: </span>
          <span className={css.nameNumber}>{number}</span>
          <button type="button"
            className={css.classListButton}
            onClick={() => removeContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
