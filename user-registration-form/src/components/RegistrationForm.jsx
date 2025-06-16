import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";

const RegistrationForm = () => {
  const { userData, setUserData } = useUserContext();

  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    profilePicture: null,
    country: "",
    state: "",
    city: "",
    zip: "",
    street: "",
    companyName: "",
    jobTitle: "",
    website: "",
    linkedinProfile: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    const val = type === "file" ? files[0] : value;
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };


  const validate = () => {
    const newErrors = {};

    // Personal Info
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.userName.trim()) newErrors.userName = "Username is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of Birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";

    // Address
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.city.trim()) newErrors.city = "City is required";

    if (!formData.zip) newErrors.zip = "ZIP / Postal Code is required";
    else if (!/^\d+$/.test(formData.zip)) newErrors.zip = "ZIP must be numeric";

    if (!formData.street.trim())
      newErrors.street = "Street Address is required";

    // Professional Info (optional example rules)
    if (formData.website && !/^https?:\/\//i.test(formData.website))
      newErrors.website = "Website must start with http:// or https://";

    if (
      formData.linkedinProfile &&
      !/^https?:\/\//i.test(formData.linkedinProfile)
    )
      newErrors.linkedinProfile =
        "LinkedIn URL must start with http:// or https://";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setUserData(formData);
    }
  };

  useEffect(() => {
    console.log(userData)
  },[])

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form" noValidate>
        {/* Personal Info */}
        <fieldset>
          <legend>Personal Information</legend>

          <input
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}

          <input
            name="userName"
            type="text"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Username"
          />
          {errors.userName && <span className="error">{errors.userName}</span>}

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}

          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <input
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
          />
          {errors.dateOfBirth && (
            <span className="error">{errors.dateOfBirth}</span>
          )}

          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}

          <label className="file-upload">
            Profile Picture
            <input
              name="profilePicture"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
          </label>
        </fieldset>

        {/* Address */}
        <fieldset>
          <legend>Address</legend>

          <input
            name="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
          />
          {errors.country && <span className="error">{errors.country}</span>}

          <input
            name="state"
            type="text"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
          />
          {errors.state && <span className="error">{errors.state}</span>}

          <input
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
          />
          {errors.city && <span className="error">{errors.city}</span>}

          <input
            name="zip"
            type="number"
            value={formData.zip}
            onChange={handleChange}
            placeholder="ZIP / Postal Code"
          />
          {errors.zip && <span className="error">{errors.zip}</span>}

          <textarea
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Street Address"
          />
          {errors.street && <span className="error">{errors.street}</span>}
        </fieldset>

        {/* Professional Info */}
        <fieldset>
          <legend>Professional Information</legend>

          <input
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
          />

          <input
            name="jobTitle"
            type="text"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Job Title"
          />

          <input
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website / Portfolio URL"
          />
          {errors.website && <span className="error">{errors.website}</span>}

          <input
            name="linkedinProfile"
            type="url"
            value={formData.linkedinProfile}
            onChange={handleChange}
            placeholder="LinkedIn Profile URL"
          />
          {errors.linkedinProfile && (
            <span className="error">{errors.linkedinProfile}</span>
          )}
        </fieldset>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
