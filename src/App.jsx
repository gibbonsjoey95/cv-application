import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import { Education } from './Education';
import { Experience } from './Experience';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  const handleDeleteEducation = (id) => {
    const updatedEducationInfo = educationInfo.filter((edu) => edu.id !== id);
    setEducationInfo(updatedEducationInfo);
  };

  const handleDeleteExperience = (id) => {
    const updatedExperienceInfo = experienceInfo.filter((exp) => exp.id !== id);
    setExperienceInfo(updatedExperienceInfo);
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
      <Experience
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
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
            {educationInfo.map((edu, index) => (
              <li key={edu.id}>
                <p>{index + 1}</p>
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
          <h2>Experience</h2>
          <ul>
            {experienceInfo.map((exp, index) => (
              <li key={exp.id}>
                <p>{index + 1}</p>
                <p>Company: {exp.companyName}</p>
                <p>Position: {exp.positioin}</p>
                <p>Responsibilities: {exp.responsibilities}</p>
                <p>Start Date: {exp.startDate}</p>
                <p>End Date: {exp.endDate}</p>
                <button>Edit</button>
                <button onClick={() => handleDeleteExperience(exp.id)}>
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
