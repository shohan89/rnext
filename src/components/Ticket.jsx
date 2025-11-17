import { useState } from "react";

export default function Ticket() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [fullName, setFullName] = useState('');  redundant state for learning purpose
    const fullName =`${firstName} ${lastName}`; // derived state
  return (
    <div>
      <h2>Let\'s check you in</h2>
      <label>
        First name:
        <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <br /> <br />
      <label>
        Last name:
        <input
        value={lastName}
        onChange={e => setLastName(e.target.value)} 
        />
      </label>
      <p>
        {/* Your ticket will be issued to: <b>{firstName} {lastName}</b> */}
        {/* we can use the above example or below example */}
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </div>
  );
}
