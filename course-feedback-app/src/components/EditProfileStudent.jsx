import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import { paletteColors } from "./palette";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Profile Updated Successfully!");
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", height: "100vh" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: paletteColors.yorkBlue,
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Back Button */}
        <button
          style={{
            border: "none",
            background: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color:  paletteColors.navy,
          }}
        >
          <i className="bi bi-arrow-left"></i>
        </button>

        {/* Title */}
        <h1 style={{ margin: 0, color:  paletteColors.navy, fontSize: "1.2rem" }}>
          Edit Profile
        </h1>

        {/* Logout and Profile Icons */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <button
            style={{
              border: "none",
              background: "none",
              color:  paletteColors.navy,
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            <i className="bi bi-box-arrow-right"></i> {/* Logout Icon */}
          </button>
          <button
            style={{
              border: "none",
              background: "#FFCC5C",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <i className="bi bi-person-fill" style={{ color:  paletteColors.navy }}></i> {/* Profile Icon */}
          </button>
        </div>
      </header>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          padding: "20px",
          maxWidth: "400px",
          margin: "30px auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Major Input */}
        <div>
          <label
            htmlFor="major"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#333333",
            }}
          >
            Major
          </label>
          <input
            {...register("major", { required: "Major is required" })}
            type="text"
            id="major"
            placeholder="Biomedical Sciences"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #6AB1E2",
              borderRadius: "10px",
              fontSize: "1rem",
            }}
          />
          {errors.major && (
            <span style={{ color: "red", fontSize: "0.9rem" }}>
              {errors.major.message}
            </span>
          )}
        </div>

        {/* GPA Input */}
        <div>
          <label
            htmlFor="gpa"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#333333",
            }}
          >
            GPA
          </label>
          <input
            {...register("gpa", {
              required: "GPA is required",
              pattern: {
                value: /^[0-4]\.\d{2}$/,
                message: "GPA must be a number between 0.00 and 4.00",
              },
            })}
            type="text"
            id="gpa"
            placeholder="3.89"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #6AB1E2",
              borderRadius: "10px",
              fontSize: "1rem",
            }}
          />
          {errors.gpa && (
            <span style={{ color: "red", fontSize: "0.9rem" }}>
              {errors.gpa.message}
            </span>
          )}
        </div>

        {/* Graduating Year Input */}
        <div>
          <label
            htmlFor="graduatingYear"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#333333",
            }}
          >
            Graduating Year
          </label>
          <input
            {...register("graduatingYear", {
              required: "Graduating year is required",
              pattern: {
                value: /^\d{4}$/,
                message: "Year must be a 4-digit number",
              },
            })}
            type="text"
            id="graduatingYear"
            placeholder="2028"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #6AB1E2",
              borderRadius: "10px",
              fontSize: "1rem",
            }}
          />
          {errors.graduatingYear && (
            <span style={{ color: "red", fontSize: "0.9rem" }}>
              {errors.graduatingYear.message}
            </span>
          )}
        </div>

        {/* Save Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#FFCC5C",
            olor: paletteColors.mediumBlue,
            fontWeight: "bold",
            fontSize: "1rem",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          {isSubmitting ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
