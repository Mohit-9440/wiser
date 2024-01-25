import React, { useState } from "react";
import "./login.css";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  OutlinedInput,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import Background from "../../assets/background.png";
import Logo from "../../assets/logo.png";
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const showSnackbar = (message, severity = "info") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.id]: "",
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleLogin = () => {
    const { email, password } = formData;
    let newErrors = {};

    // Validate email
    if (!validateEmail(email)) {
      newErrors = {
        ...newErrors,
        email: "Invalid email format",
      };
    }

    // Validate password
    if (!validatePassword(password)) {
      newErrors = {
        ...newErrors,
        password: "Password must be at least 6 characters long",
      };
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showSnackbar("Please check the form for errors.", "error");
      return;
    }

    showSnackbar("Login successful!", "success");
  };
  return (
    <div className="login-page">
      <div className="login">
        <div className="login-left">
          <img src={Background} alt="" />
        </div>
        <div className="login-right">
          <Grid
            item
            component={Paper}
            elevation={6}
            square
            p={4}
            classes={{ root: "login-left-section" }}
          >
            <div className="wiser-logo">
              <img src={Logo} alt="" />
            </div>
            <Box
              className="login-left-section-box"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingInline: "30px",
                width: "75%",
              }}
            >
              <Typography
                component="h2"
                variant="h5"
                classes={{ root: "login-heading" }}
              >
                Welcome Back
              </Typography>
              <Typography
                component="h5"
                variant="h7"
                classes={{ root: "login-subheading" }}
              >
                Enter your details
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1, width:"100%"}} fullWidth>
                <div className="form-con-wrappers">
                <div className="content">Email</div>
                  <OutlinedInput
                    required
                    fullWidth
                    id="email"
                    placeholder="abc@work.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{marginBottom: "25px"}}
                    classes={{
                      root: "login-input-box",
                      input: "input-box-input",
                    }}
                  />
                </div>

                <div className="form-con-wrappers">
                <div className="content">Password</div>
                  <OutlinedInput
                    required
                    fullWidth
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    error={!!errors.password}
                    helperText={errors.password}
                    classes={{
                      root: "login-input-box",
                      input: "input-box-input",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                  }}
                  className="login-remember-wrap"
                >
                  <Button
                    component={RouterLink}
                    variant="h5"
                    classes={{ root: "login-redirect-button" }}
                  >
                    Forgot Password?
                  </Button>
                </div>

                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  classes={{ root: "login-submit-button" }}
                  onClick={handleLogin}
                >
                  Sign in
                </Button>
                <Typography
                  component="h5"
                  variant="h7"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "400",
                    fontFamily: "'Urbanist', sans-serif",
                    color: "#8f9fb2",
                  }}
                  classes={{ root: "login-redirect-font" }}
                >
                  Don't have an account?{" "}
                  <Button
                    component={RouterLink}
                    variant="h5"
                    classes={{ root: "login-redirect-button" }}
                  >
                    Sign Up
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        classes={{ root: "login-alert-box" }}
      >
        <MuiAlert
          classes={{ root: "login-alert-text" }}
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
