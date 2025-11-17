import { useState } from "react";

export default function Ticket() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState(''); // redundant state for learning purpose
  return (
    <div>
      <h2>Let\'s check you in</h2>
      <label>
        First name:
        <input
        value={firstName}
        onChange={e => {
            setFirstName(e.target.value);
            setFullName(e.target.value + ' ' +lastName);
        }}
        />
      </label>
      <br /> <br />
      <label>
        Last name:
        <input
        value={lastName}
        onChange={e => {
            setLastName(e.target.value);
            setFullName(firstName + ' ' + e.target.value);
        }} 
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </div>
  );
}
