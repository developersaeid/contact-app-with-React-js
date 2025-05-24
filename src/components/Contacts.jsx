import { useState } from "react";
import { v4 } from "uuid";

import ContactsList from "./ContactsList";
import inputs from "../constants/input.js";

import styles from "./Contacts.module.css"


function Contacts() {
  const [alert, setAlert] = useState(""); // state to store alert message
  const [contacts, setContacts] = useState([]); // State to store contacts
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  }); // State to store contact details

   // With this function, every time the user types a character in an input field, the contact state gets updated dynamically.
  const changeHandler = (event) => {
    const name = event.target.name; // The name of the field that was changed.
    const value = event.target.value; // The new value entered by the user in input.
    setContact((contact) => ({ ...contact, [name]: value }));  // Then the field that was changed will be updated state with the new value.
  };
  const addHandler = () => {
    // add contact to contacts array
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please fill all fields");
      return;
    }
    setAlert(""); // clear alert
    const newContact = {...contact,id:v4() } // create new contact with id
    setContacts((contacts) => [...contacts, newContact]);// add new contact to contacts array 
    setContact({
      id:"",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });  // reset contact state
  };

  const deleteHandler = (id) => { // lifting state up
    const newContacts = contacts.filter(contact => contact.id !== id); // filter contacts array
    setContacts(newContacts);
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]} // read value from state contact
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className={styles.alert} >{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contacts;
