import { EducationalInfo } from './educational_info';
import { useState } from 'react';

function Education({ educationInfo, setEducationInfo }) {
  const [school, setSchool] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddEducation = () => {
    const newEduItem = new EducationalInfo(
      school,
      titleOfStudy,
      startDate,
      endDate
    );
    setEducationInfo([...educationInfo, newEduItem]);
    console.log(educationInfo);
  };

  return (
    <>
      <h2>Educational Information</h2>
      <label>
        School:{' '}
        <input
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          type="text"
        />
      </label>
      <label>
        Title of Study:{' '}
        <input
          value={titleOfStudy}
          onChange={(e) => setTitleOfStudy(e.target.value)}
          type="text"
        />
      </label>
      <label>
        Start Date:{' '}
        <input
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          type="date"
        />
      </label>
      <label>
        End Date:{' '}
        <input
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          type="date"
        />
      </label>
      <button onClick={handleAddEducation}>Add</button>
    </>
  );
}

export { Education };
