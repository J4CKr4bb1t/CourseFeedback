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
            {...register("department", { required: "department is required" })}
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
    placeholder="Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum dictum augue integer sodales quam ultrices nec et viverra. Habitasse integer volutpat mattis ad vel enim sagittis dolor. Accumsan gravida et ad convallis fringilla morbi. Adipiscing elit semper ex volutpat senectus taciti sociosqu consequat. Volutpat quis accumsan et vestibulum fames risus sagittis."
    style={{
      width: "100%",
      padding: "15px",
      border: "1px solid #6AB1E2",
      borderRadius: "10px",
      fontSize: "1rem",
      minHeight: "fit-content",
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
