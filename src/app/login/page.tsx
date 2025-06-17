"use client";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const LoginPage = () => {
  const [state, setState] = useState<string>("Sign Up");
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFromData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFromData({ name: "", email: "", password: "" });
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        marginTop: 5,
        padding: 3,
        border: "1px solid #D4D4D4",
        borderRadius: 2,
      }}
    >
      <Grid
        container
        direction="column"
        // alignItems="center"
        spacing={1}
        color="#4B5563"
      >
        <Typography
          fontSize={{ xs: 18, sm: 22, md: 26, lg: 30 }}
          fontWeight={500}
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </Typography>
        <Typography fontSize={{ xs: 10, sm: 12, md: 14, lg: 16 }}>
          Please {state === "Sign Up" ? "sign Up" : "log In"} to book
          appointment
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit}>
        {state === "Sign Up" && (
          <TextField
            label="Name"
            name="name"
            size="small"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        )}
        <TextField
          label="Email"
          name="email"
          type="email"
          size="small"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          size="small"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          sx={{
            width: "100%",
            backgroundColor: "#5F6FFF",
            color: "#fff",
            marginTop: 2,
          }}
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </Button>
        {state === "Sign Up" ? (
          <Typography
            mt={2}
            fontSize={{ xs: 8, sm: 10, md: 12, lg: 14 }}
            color="#4B5563"
          >
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              style={{ color: "#5F6FFF", cursor: "pointer" }}
            >
              Login here
            </span>{" "}
          </Typography>
        ) : (
          <Typography
            mt={2}
            fontSize={{ xs: 8, sm: 10, md: 12, lg: 14 }}
            color="#4B5563"
          >
            Create an new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              style={{ color: "#5F6FFF", cursor: "pointer" }}
            >
              Click here
            </span>{" "}
          </Typography>
        )}
      </form>
    </Container>
  );
};

export default LoginPage;
