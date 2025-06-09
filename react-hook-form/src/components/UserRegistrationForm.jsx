import React, { useEffect, useState } from "react";

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    dateOfBirth: "",
    acceptTerms: false,
  });
  const [error, setError] = useState({
    fullname: "",
    email: "",
    password: "",
    dateOfBirth: "",
    acceptTerms: false,
  });

  const handleOnChange = (e) => {
    let target = e.target.name;
    let isCheckBox = e.target.type === "checkbox";

    setError((prev) => ({
      ...prev,
      [target]: "",
    }));

    if (isCheckBox) {
      setFormData((prev) => ({
        ...prev,
        [target]: e.target.checked,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [target]: e.target.value,
    }));
  };

  const checkValidation = () => {
    setError({
      fullname: "",
      email: "",
      password: "",
      dateOfBirth: "",
      acceptTerms: false,
    });
    if (!formData.fullname) {
      setError((prev) => ({
        ...prev,
        fullname: "Name is required field",
      }));
    }
    if (!formData.email) {
      setError((prev) => ({
        ...prev,
        email: "Email is required field",
      }));
    }
    if (!formData.password) {
      setError((prev) => ({
        ...prev,
        password: "Password is required field",
      }));
    }
    if (!formData.dateOfBirth) {
      setError((prev) => ({
        ...prev,
        dateOfBirth: "Date of Birth is required field",
      }));
    }
    if (!formData.acceptTerms) {
      setError((prev) => ({
        ...prev,
        acceptTerms: "Accept the terms",
      }));
    }
    if (
      formData.fullname &&
      formData.email &&
      formData.password &&
      formData.dateOfBirth &&
      formData.acceptTerms
    ) {
      return true;
    } else return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = checkValidation();
    if (isValid) {
      console.log(formData);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            value={formData.fullname}
            type="text"
            name="fullname"
            onChange={handleOnChange}
          />
          {error.fullname && (
            <p style={{ textAlign: "left", color: "red", margin: "0" }}>
              {error.fullname}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            type="text"
            name="email"
            onChange={handleOnChange}
          />
          {error.email && (
            <p style={{ textAlign: "left", color: "red", margin: "0" }}>
              {error.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={formData.password}
            type="text"
            name="password"
            onChange={handleOnChange}
          />
          {error.password && (
            <p style={{ textAlign: "left", color: "red", margin: "0" }}>
              {error.password}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of birth</label>
          <input
            value={formData.dateOfBirth}
            type="date"
            name="dateOfBirth"
            onChange={handleOnChange}
          />
          {error.dateOfBirth && (
            <p style={{ textAlign: "left", color: "red", margin: "0" }}>
              {error.dateOfBirth}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="acceptTerms">Accept Terms</label>
          <input
            checked={formData.acceptTerms}
            type="checkbox"
            name="acceptTerms"
            onChange={handleOnChange}
          />
          {error.acceptTerms && (
            <p style={{ textAlign: "left", color: "red", margin: "0" }}>
              {error.acceptTerms}
            </p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserRegistrationForm;
