import ContactItem from "./ContactItem";
import Styles from "./ContactList.module.css"

function ContactsList({ contacts, deleteHandler }) {
  return (
    <div className={Styles.container}>
      <h3 >Contact List</h3>
      {contacts.length ? (
        <ul className={Styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={Styles.message}> No Contacts Yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
