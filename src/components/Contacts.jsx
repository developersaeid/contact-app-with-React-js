import { useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constants/input.js";
import { v4 } from "uuid";
import styles from "./Contacts.module.css"


function Contacts() {
  const [alert, setAlert] = useState(""); // state to store alert message
  const [contacts, setContacts] = useState([]); // for all our Contact's
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value })); //update state
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
    setAlert("");
    const newContact = {...contact,id:v4() } // create new contact with id
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      id:"",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
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
            value={contact[input.name]}
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
