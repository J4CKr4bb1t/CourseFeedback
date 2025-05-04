import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { paletteColors } from "./palette";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // Navigate to the respective profile page after login
  const onSubmit = (data, type) => {
    // Prepare the payload to match backend expectations
    const payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      type: type, // either "student" or "professor"
      password: data.password,
    };

    if (data.password !== data.password2)
      alert("Passwords do not match");

    fetch("http://localhost:3000/login/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to create user");
        }
        return res.json();
      })
      .then((createdUser) => {
        console.log("User created:", createdUser);
        navigate("/"); // Redirect to login or wherever you want
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div style={{ backgroundColor: paletteColors.white, height: "100vh" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: paletteColors.yorkBlue,
          padding: "15px 0",
          textAlign: "center",
          color: paletteColors.navy,
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Course Feedback
      </header>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          height: "calc(100vh - 60px)",
          padding: "0 20px",
        }}
      >
        {/* Log In Section */}
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <h2 style={{ marginBottom: "20px", color: "black" }}>Log in:</h2>

          <form>
            {/* Fname Input */}
            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: paletteColors.mediumBlue,
                }}
              >
                First Name:
              </label>
              <input
                {...register("firstName", {
                  required: "First Name is required",
                })}
                type="text"
                id="fname"
                placeholder="Boomer"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: `1px solid ${paletteColors.mediumBlue}`,
                  fontSize: "1rem",
                }}
              />
              {errors.fname && (
                <div
                  style={{
                    color: "red",
                    fontSize: "0.9rem",
                    marginTop: "5px",
                  }}
                >
                  {errors.fname.message}
                </div>
              )}
            </div>

            {/* Lname Input */}
            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: paletteColors.mediumBlue,
                }}
              >
                Last Name:
              </label>
              <input
                {...register("lastName", {
                  required: "Last Name is required",
                })}
                type="text"
                id="lname"
                placeholder="DaBobcat"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: `1px solid ${paletteColors.mediumBlue}`,
                  fontSize: "1rem",
                }}
              />
              {errors.lname && (
                <div
                  style={{
                    color: "red",
                    fontSize: "0.9rem",
                    marginTop: "5px",
                  }}
                >
                  {errors.lname.message}
                </div>
              )}
            </div>
            {/* Email Input */}
            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: paletteColors.mediumBlue,
                }}
              >
                Email:
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  validate: (value) =>
                    value.includes("@quinnipiac.edu") || "Email must include @",
                })}
                type="text"
                id="email"
                placeholder="example@quinnipiac.edu"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: `1px solid ${paletteColors.mediumBlue}`,
                  fontSize: "1rem",
                }}
              />
              {errors.email && (
                <div
                  style={{
                    color: "red",
                    fontSize: "0.9rem",
                    marginTop: "5px",
                  }}
                >
                  {errors.email.message}
                </div>
              )}
            </div>

            {/* Password Input */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: paletteColors.mediumBlue,
                }}
              >
                Password:
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                id="password"
                type="password"
                placeholder="enter password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: `1px solid ${paletteColors.mediumBlue}`,
                  fontSize: "1rem",
                }}
              />
              {errors.password && (
                <div
                  style={{
                    color: "red",
                    fontSize: "0.9rem",
                    marginTop: "5px",
                  }}
                >
                  {errors.password.message}
                </div>
              )}
            </div>

            {/* Confirm Password Input */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: paletteColors.mediumBlue,
                }}
              >
                Confirm Password:
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                id="password2"
                type="password"
                placeholder="confirm password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: `1px solid ${paletteColors.mediumBlue}`,
                  fontSize: "1rem",
                }}
              />
              {errors.password2 && (
                <div
                  style={{
                    color: "red",
                    fontSize: "0.9rem",
                    marginTop: "5px",
                  }}
                >
                  {errors.password2.message}
                </div>
              )}
            </div>

            {/* Login Buttons */}
            <button
              type="button"
              onClick={handleSubmit((data) => onSubmit(data, "student"))}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "10px",
                backgroundColor: paletteColors.burntGold,
                color: paletteColors.white,
                fontSize: "1rem",
                fontWeight: "bold",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              Create Student
            </button>
            <button
              type="button"
              onClick={handleSubmit((data) => onSubmit(data, "professor"))}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: paletteColors.mediumBlue,
                color: paletteColors.white,
                fontSize: "1rem",
                fontWeight: "bold",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              Create Professor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
