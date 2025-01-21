import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!email.match(emailPattern)) {
      setError("Enter Valid Mail ID");
      return;
    }

    // Password validation (length and special character)
    const passwordPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (!password.match(passwordPattern)) {
      setError("Password must contain at least one special character.");
      return;
    }

    setError("");
    alert("Login successful!");
  };

  return (
    <div
      className="lform"
      style={{
        width: "400px",
        margin: "0 auto",
        padding: "30px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Roboto', sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "28px", color: "#333" }}>
        Login
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#555",
              display: "block",
              marginBottom: "5px",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Gmail"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "25px", textAlign: "left" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#555",
              display: "block",
              marginBottom: "5px",
            }}
          >
            Password:
          </label>
          <div
            style={{
              position: "relative",
            }}
          >
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                color: "white",
                fontWeight: "600",
              }}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
        >
          Login
        </button>

        {error && (
          <p style={{ color: "Black", fontSize: "14px", marginTop: "15px" }}>
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;