function GeneralInfo({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
}) {
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <>
      <h1>General Info</h1>
      <label>
        First Name:{' '}
        <input value={firstName} onChange={handleFirstNameChange} type="text" />
      </label>
      <label>
        Last Name:{' '}
        <input value={lastName} onChange={handleLastNameChange} type="text" />
      </label>
      <label>
        Email: <input value={email} onChange={handleEmailChange} type="text" />
      </label>
      <label>
        Phone Number:{' '}
        <input
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          type="text"
        />
      </label>
    </>
  );
}

export default GeneralInfo;
