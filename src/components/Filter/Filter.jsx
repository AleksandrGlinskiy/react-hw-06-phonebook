
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';
import css from './Filter.module.css'
export const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter)

  const changeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

   
  return (
    <label className={css.label} htmlFor="">
        Find contacts by name 
      <input className={css.input} type="text" value={filterName} onChange={changeFilter}/>
      </label>
  )

}

