import { useState } from 'react';
import GeneralInfo from './GeneralInfo';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <>
      <GeneralInfo
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />

      <div>
        <h2>
          {firstName} {lastName}
        </h2>
        {email && <h4>Email: {email}</h4>}
        {phoneNumber && <h4>Phone: {phoneNumber}</h4>}
      </div>
    </>
  );
}

export default App;
