import { useState } from "react"
import ContactsList from "./ContactsList"

function Contacts() {
    const [contacts,setContacts] = useState([]) // for all our Contact's
    const [contact,setContact] = useState({ // for Form
        name: "",
        lastName: "",
        email: "",
        phone: "",
    })

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setContact((contact)=>({...contact,[name]:value})) //update state 

    }
    const addHandler = () => { // add contact to contacts array
        setContacts(contacts => ([...contacts,contact]))
        setContact({
            name: "",
            lastName: "",
            email: "",
            phone: "",
        })
    }


  return (
    <div>
      <div>
        <input type="text" placeholder="Name" name="name" value={contact.name} onChange={changeHandler}/>
        <input type="text" placeholder="Last Name" name="lastName" value={contact.lastName} onChange={changeHandler}/>
        <input type="email" placeholder="Email" name="email" value={contact.email} onChange={changeHandler}/>
        <input type="number" placeholder="Phone" name="phone" value={contact.phone} onChange={changeHandler}/>
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <ContactsList contacts={contacts}/>
    </div>
  )
}

export default Contacts
