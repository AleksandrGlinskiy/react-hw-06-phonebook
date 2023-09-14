import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Form.module.css'

export function ContactForm ({onSubmit}) {

  const[id, setId] =useState('');
  const[name, setName] =useState('');
  const[number, setNumber] =useState('');

  
    
    const handleChange = e => {
        const contactId = nanoid()
        const{name, value} = e.target;

        switch(name){
          case 'name':
            setName(value);
            break;
            case 'number':
              setNumber(value);
              break;
              default:
                return;
        }
        setId(contactId)
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
       
        onSubmit({name: name, number: number, id: id})
        reset();
      };
      
      const reset =() => {
        setId('');
        setName('');
        setNumber('');
      }

  
    return (
      <form className={css.form} action="" onSubmit={handleSubmit}>
        
        <label className={css.label} htmlFor="">
          Name
          <input className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={css.label} htmlFor="">
          Number
          <input className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className={css.formButton} type="submit">Add contact</button>
        
        
      </form>
    )
  }


// export class ContactForm extends Component {

//   state = {
//     id: '',
//     name: '',
//     number: ''
    
//   }

//   handleChange = e => {
//     const contactId = nanoid()
//     const{name, value} = e.target;
//     this.setState({ [name]: value, id: contactId});
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
   
//     this.props.onSubmit(this.state)
//     this.reset();
//   };
//   reset =() => {
//     this.setState({name: '', number: '', id: ''})
//   }

//   render() {
//     const {name, number} = this.state;
//     return (
//       <form className={css.form} action="" onSubmit={this.handleSubmit}>
        
//         <label className={css.label} htmlFor="">
//           Name
//           <input className={css.input}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label className={css.label} htmlFor="">
//           Number
//           <input className={css.input}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={this.handleChange}
//           />
//         </label>
//         <button className={css.formButton} type="submit">Add contact</button>
        
        
//       </form>
//     )
//   }
// }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}