import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import { Education } from './Education';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [educationInfo, setEducationInfo] = useState([]);

  const handleDeleteEducation = (id) => {
    const updatedEducationInfo = educationInfo.filter((edu) => edu.id !== id);
    setEducationInfo(updatedEducationInfo);
  };
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
      <Education
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />

      <div>
        <h2>
          {firstName} {lastName}
        </h2>
        {email && <h4>Email: {email}</h4>}
        {phoneNumber && <h4>Phone: {phoneNumber}</h4>}

        <div>
          <h2>Education History</h2>
          <ul>
            {educationInfo.map((edu) => (
              <li key={edu.id}>
                <p>{edu.id}</p>
                <p>School: {edu.school}</p>
                <p>Title of Study: {edu.titleOfStudy}</p>
                <p>Start: {edu.startDate}</p>
                <p>End: {edu.endDate}</p>
                <button>Edit</button>
                <button onClick={() => handleDeleteEducation(edu.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
