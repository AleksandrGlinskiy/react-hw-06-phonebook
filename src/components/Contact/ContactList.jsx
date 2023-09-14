import PropTypes from 'prop-types';
import css from './ContactList.module.css'
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul >
      {contacts.map(({id, name, number}) => (
        <li className={css.item} key={id}>
          <span className={css.nameNumber}>{name}: </span>
          <span className={css.nameNumber}>{number}</span>
          <button className={css.classListButton} onClick={()=> onDeleteContact(id)} >Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
