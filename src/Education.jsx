import { EducationalInfo } from './educational_info';
import { useEffect, useState } from 'react';

function Education({
  educationInfo,
  setEducationInfo,
  editEducation,
  setEditEducation,
}) {
  const [school, setSchool] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const reset = () => {
    setSchool('');
    setTitleOfStudy('');
    setStartDate('');
    setEndDate('');
  };

  const handleUpdateEducation = (updatedEdu) => {
    const updatedEducationInfo = educationInfo.map((edu) =>
      edu.id === updatedEdu.id ? updatedEdu : edu
    );
    setEducationInfo(updatedEducationInfo);
    setEditEducation(null);
  };

  const handleAddEducation = () => {
    if (editEducation) {
      handleUpdateEducation({
        ...editEducation,
        school,
        titleOfStudy,
        startDate,
        endDate,
      });
    } else {
      if (school && titleOfStudy && startDate && endDate) {
        const newEduItem = new EducationalInfo(
          school,
          titleOfStudy,
          startDate,
          endDate
        );
        setEducationInfo([...educationInfo, newEduItem]);
      }
      reset();
    }
  };

  useEffect(() => {
    if (editEducation) {
      setSchool(editEducation.school);
      setTitleOfStudy(editEducation.titleOfStudy);
      setStartDate(editEducation.startDate);
      setEndDate(editEducation.endDate);
      // setEditEducation(null);
    } else {
      reset();
    }
  }, [editEducation]);

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
