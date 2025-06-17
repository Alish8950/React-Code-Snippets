import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm2 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("profileInfo.password");

  const onSubmit = (data) => {
    // Handle profile picture separately
    const profilePicture = data.profileInfo.profilePicture[0];
    const formData = {
      ...data,
      profileInfo: {
        ...data.profileInfo,
        profilePicture,
      },
    };
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="registration-form" noValidate>
        {/* Personal Info */}
        <fieldset>
          <legend>Personal Information</legend>

          <input
            {...register("profileInfo.fullName", {
              required: "Full name is required",
              minLength: { value: 3, message: "Length should be at least 3" },
            })}
            type="text"
            placeholder="Full Name"
          />
          {errors?.profileInfo?.fullName && (
            <span className="error">{errors.profileInfo.fullName.message}</span>
          )}

          <input
            {...register("profileInfo.username", {
              required: "Username is required",
            })}
            type="text"
            placeholder="Username"
          />
          {errors?.profileInfo?.username && (
            <span className="error">{errors.profileInfo.username.message}</span>
          )}

          <input
            {...register("profileInfo.email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            type="email"
            placeholder="Email Address"
          />
          {errors?.profileInfo?.email && (
            <span className="error">{errors.profileInfo.email.message}</span>
          )}

          <input
            {...register("profileInfo.password", {
              required: "Password is required",
              minLength: { value: 8, message: "Minimum 8 characters required" },
            })}
            type="password"
            placeholder="Password"
          />
          {errors?.profileInfo?.password && (
            <span className="error">{errors.profileInfo.password.message}</span>
          )}

          <input
            {...register("profileInfo.confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm Password"
          />
          {errors?.profileInfo?.confirmPassword && (
            <span className="error">
              {errors.profileInfo.confirmPassword.message}
            </span>
          )}

          <input
            {...register("profileInfo.phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
            type="tel"
            placeholder="Phone Number"
          />
          {errors?.profileInfo?.phone && (
            <span className="error">{errors.profileInfo.phone.message}</span>
          )}

          <input
            {...register("profileInfo.dateOfBirth", {
              required: "Date of birth is required",
            })}
            type="date"
            placeholder="Date of Birth"
          />
          {errors?.profileInfo?.dateOfBirth && (
            <span className="error">{errors.profileInfo.dateOfBirth.message}</span>
          )}

          <select
            {...register("profileInfo.gender", {
              required: "Gender is required",
            })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors?.profileInfo?.gender && (
            <span className="error">{errors.profileInfo.gender.message}</span>
          )}

          <label className="file-upload">
            Profile Picture
            <input
              {...register("profileInfo.profilePicture", {
                required: "Profile picture is required",
              })}
              type="file"
              accept="image/*"
            />
          </label>
          {errors?.profileInfo?.profilePicture && (
            <span className="error">{errors.profileInfo.profilePicture.message}</span>
          )}
        </fieldset>

        {/* Address */}
        <fieldset>
          <legend>Address</legend>

          <input
            {...register("address.country", {
              required: "Country is required",
            })}
            type="text"
            placeholder="Country"
          />
          {errors?.address?.country && (
            <span className="error">{errors.address.country.message}</span>
          )}

          <input
            {...register("address.state", { required: "State is required" })}
            type="text"
            placeholder="State"
          />
          {errors?.address?.state && (
            <span className="error">{errors.address.state.message}</span>
          )}

          <input
            {...register("address.city", { required: "City is required" })}
            type="text"
            placeholder="City"
          />
          {errors?.address?.city && (
            <span className="error">{errors.address.city.message}</span>
          )}

          <input
            {...register("address.zip", { required: "Zip code is required" })}
            type="number"
            placeholder="ZIP / Postal Code"
          />
          {errors?.address?.zip && (
            <span className="error">{errors.address.zip.message}</span>
          )}

          <textarea
            {...register("address.street", {
              required: "Street address is required",
            })}
            placeholder="Street Address"
          />
          {errors?.address?.street && (
            <span className="error">{errors.address.street.message}</span>
          )}
        </fieldset>

        {/* Professional Info */}
        <fieldset>
          <legend>Professional Information</legend>

          <input
            {...register("professionalInfo.company", {
              required: "Company name is required",
            })}
            type="text"
            placeholder="Company Name"
          />
          {errors?.professionalInfo?.company && (
            <span className="error">{errors.professionalInfo.company.message}</span>
          )}

          <input
            {...register("professionalInfo.jobTitle", {
              required: "Job Title is required",
            })}
            type="text"
            placeholder="Job Title"
          />
          {errors?.professionalInfo?.jobTitle && (
            <span className="error">{errors.professionalInfo.jobTitle.message}</span>
          )}

          <input
            {...register("professionalInfo.website", {
              required: "Website name is required",
              pattern: {
                value: /^(https?:\/\/)?([\w\d-]+\.){1,}[\w]{2,}(\/.*)?$/,
                message: "Enter a valid URL",
              },
            })}
            type="url"
            placeholder="Website / Portfolio URL"
          />
          {errors?.professionalInfo?.website && (
            <span className="error">{errors.professionalInfo.website.message}</span>
          )}

          <input
            {...register("professionalInfo.linkedinProfile", {
              required: "LinkedIn profile is required",
              pattern: {
                value: /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/,
                message: "Enter a valid LinkedIn URL",
              },
            })}
            type="url"
            placeholder="LinkedIn Profile URL"
          />
          {errors?.professionalInfo?.linkedinProfile && (
            <span className="error">
              {errors.professionalInfo.linkedinProfile.message}
            </span>
          )}
        </fieldset>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm2;
