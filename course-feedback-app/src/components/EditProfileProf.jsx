import React from "react";
import { useNavigate } from "react-router-dom"; 
import { useForm } from "react-hook-form";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import { paletteColors } from "./palette";

const EditProfileProf = () => {
  const navigate = useNavigate(); 
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
            fontSize: "2rem", 
            cursor: "pointer",
            color: paletteColors.navy,
          }}
          // Navigate to Course List
          onClick={() => navigate("/course-list-prof")} 
        >
          <i className="bi bi-house"></i>
        </button>

        {/* Title */}
        <h1 style={{ margin: 0, color: paletteColors.navy, fontWeight: "bold", fontSize: "2rem" }}>
          Edit Profile
        </h1>

        {/* Logout and Profile Icons */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
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
             // Navigate to Edit Profile
             onClick={() => navigate("/edit-profile-student")} 
          >
            <i className="bi bi-person-fill" style={{ color:  paletteColors.navy }}></i> {/* Profile Icon */}
          </button>
          <button
            style={{
              border: "none",
              background: "none",
              color:  paletteColors.navy,
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
            // Navigate to Login Form
            onClick={() => navigate("/")} 
          >
            <i className="bi bi-box-arrow-right"></i> {/* Logout Icon */}
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
        {/* Department Input */}
        <div>
          <label
            htmlFor="department"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#333333",
            }}
          >
            Department
          </label>
          <input
            {...register("department", { required: "Department is required" })}
            type="text"
            id="department"
            placeholder="Mathematics"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #6AB1E2",
              borderRadius: "10px",
              fontSize: "1rem",
            }}
          />
          {errors.department && (
            <span style={{ color: "red", fontSize: "0.9rem" }}>
              {errors.department.message}
            </span>
          )}
        </div>

        {/* Biography Input */}
        <div>
          <label
            htmlFor="biography"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#333333",
            }}
          >
            Biography
          </label>
          <textarea
            {...register("biography", {
              required: "Biography is required",
              minLength: {
                value: 10,
                message: "Biography must be at least 10 characters long",
              },
            })}
            id="biography"
            placeholder="Enter your biography"
            style={{
              width: "100%",
              padding: "15px",
              border: "1px solid #6AB1E2",
              borderRadius: "10px",
              fontSize: "1rem",
              resize: "vertical",
            }}
          ></textarea>
          {errors.biography && (
            <span style={{ color: "red", fontSize: "0.9rem" }}>
              {errors.biography.message}
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
            color: paletteColors.mediumBlue,
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

export default EditProfileProf;
