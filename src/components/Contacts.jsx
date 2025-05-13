import { useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constants/input.js";
import { v4 } from "uuid";


function Contacts() {
  const [alert, setAlert] = useState(""); // state to store alert message
  const [contacts, setContacts] = useState([]); // for all our Contact's
  const [contact, setContact] = useState({
    // for Form
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
  return (
    <div>
      <div>
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
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;
