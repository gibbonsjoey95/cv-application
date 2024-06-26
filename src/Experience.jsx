import { useEffect, useState } from 'react';
import { Job } from './job';

function Experience({
  experienceInfo,
  setExperienceInfo,
  editExperience,
  setEditExperience,
}) {
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [startJobDate, setStartJobDate] = useState('');
  const [endJobDate, setEndJobDate] = useState('');

  const reset = () => {
    setCompanyName('');
    setPosition('');
    setResponsibilities('');
    setStartJobDate('');
    setEndJobDate('');
  };

  const handleUpdateExperience = (updatedExp) => {
    const updatedExperienceInfo = experienceInfo.map((exp) =>
      exp.id === updatedExp.id ? updatedExp : exp
    );
    setExperienceInfo(updatedExperienceInfo);
    setEditExperience(null);
  };

  const handleAddExperience = () => {
    if (editExperience) {
      handleUpdateExperience({
        ...editExperience,
        companyName,
        position,
        responsibilities,
        startJobDate,
        endJobDate,
      });
    } else {
      const newExpItem = new Job(
        companyName,
        position,
        responsibilities,
        startJobDate,
        endJobDate
      );
      setExperienceInfo([...experienceInfo, newExpItem]);
    }
    reset();
  };

  useEffect(() => {
    if (editExperience) {
      setCompanyName(editExperience.companyName);
      setPosition(editExperience.position);
      setResponsibilities(editExperience.responsibilities);
      setStartJobDate(editExperience.startDate);
      setEndJobDate(editExperience.endDate);
    } else {
      reset();
    }
  }, [editExperience]);

  return (
    <>
      <h1>Experience</h1>
      <label>
        Company Name:{' '}
        <input
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          type="text"
        />
      </label>
      <label>
        Position:{' '}
        <input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          type="text"
        />
      </label>
      <label>
        Responsibilities: {''}{' '}
        <textarea
          value={responsibilities}
          onChange={(e) => setResponsibilities(e.target.value)}
        ></textarea>
      </label>
      <label>
        Start Date:{' '}
        <input
          value={startJobDate}
          onChange={(e) => setStartJobDate(e.target.value)}
          type="date"
        />
      </label>
      <label>
        End Date:{' '}
        <input
          value={endJobDate}
          onChange={(e) => setEndJobDate(e.target.value)}
          type="date"
        />
      </label>
      <button onClick={handleAddExperience}>Add</button>
    </>
  );
}

export { Experience };
