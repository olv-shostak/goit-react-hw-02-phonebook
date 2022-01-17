import React from "react";

const ContactList = ({ find, deleteContact }) => {
    return (
      <ul>
        {find.map((contact) => (
          <li key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ContactList;