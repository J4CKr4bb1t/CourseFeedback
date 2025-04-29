import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { paletteColors } from "./palette";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // Navigate to the respective profile page after login
  const onSubmit = (data, userType) => {
    if (userType === "student") {
      navigate("/course-list");
    } else if (userType === "professor") {
      navigate("/course-list-prof");
    }
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
                    value.includes("@") || "Email must include @",
                })}
                type="text"
                id="email"
                placeholder="example@qu.edu"
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
                placeholder="********"
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
              Login as Student
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
              Login as Professor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
