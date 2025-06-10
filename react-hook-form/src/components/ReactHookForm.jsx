import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // For debugging — you can remove this later
  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Full Name */}
      <div>
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          {...register("fullname", {
            required: "Full name is required",
            minLength: { value: 3, message: "At least 3 characters required" },
          })}
        />
        {errors.fullname && (
          <p style={{ textAlign: "left", color: "red", margin: "0" }}>
            {errors.fullname.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            minLength: { value: 3, message: "At least 3 characters required" },
          })}
        />
        {errors.email && (
          <p style={{ textAlign: "left", color: "red", margin: "0" }}>
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          {...register("phone", {
            required: "Phone number is required",
            minLength: { value: 10, message: "Phone number must be 10 digits" },
            maxLength: { value: 10, message: "Phone number must be 10 digits" },
          })}
        />
        {errors.phone && (
          <p style={{ textAlign: "left", color: "red", margin: "0" }}>
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Date of Birth */}
      <div>
        <label htmlFor="dateOfBirth">Date Of Birth</label>
        <input
          type="date"
          {...register("dateOfBirth", {
            required: "Date of birth is required",
          })}
        />
        {errors.dateOfBirth && (
          <p style={{ textAlign: "left", color: "red", margin: "0" }}>
            {errors.dateOfBirth.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "At least 6 characters required" },
          })}
        />
        {errors.password && (
          <p style={{ textAlign: "left", color: "red", margin: "0" }}>
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Terms and Conditions */}
      <div>
        <label htmlFor="termsconditions">Terms and Conditions</label>
        <input
          type="checkbox"
          {...register("termsconditions", {
            required: "You must accept the terms and conditions",
          })}
        />
        {errors.termsconditions && (
          <p style={{ textAlign: "left", color: "red", margin: "0" }}>
            {errors.termsconditions.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReactHookForm;
