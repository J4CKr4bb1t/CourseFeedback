import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { paletteColors } from "./palette";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      setError("root", { message: "Username is taken" });
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
          fontSize: "1.5rem",
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
          height: "calc(100vh - 60px)", // Subtract header height
          padding: "0 20px",
        }}
      >
        {/* Log In Section */}
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <h2 style={{ marginBottom: "20px", color: "black" }}>Log in:</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
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

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "12px",
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
              {isSubmitting ? "Loading..." : "Login"}
            </button>

            {/* Root Error Message */}
            {errors.root && (
              <div
                style={{
                  color: "red",
                  fontSize: "0.9rem",
                  marginTop: "10px",
                }}
              >
                {errors.root.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
