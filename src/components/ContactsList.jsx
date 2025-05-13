
function ContactsList({contacts}) {
  return (
    <div>
      <h3>Contact List</h3>
      <ul>
        {contacts.map(contact=>(<li>{contact.name}</li>))}
      </ul>
    </div>
  )
}

export default ContactsList
