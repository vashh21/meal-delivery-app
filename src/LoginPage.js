import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn({ handleLogin, blogs, users }) {
  const [role, setRole] = useState("STUDENT");
  const [emailError, setEmailError] = useState(false);
  const [loginError, setLoginError] = useState(false); // New state for login error

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (!email || !email.includes("@")) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );
    const currentUserBlogs =
      matchedUser &&
      blogs.filter((blog) => blog.postedBy === matchedUser.userId);

    if (matchedUser) {
      handleLogin(matchedUser);
      navigate("/blog");

      return;
    } else {
      setLoginError(true);
    }
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in as {role}
          </Typography>
          {loginError && (
            <Typography color='error' variant='body2'>
              Invalid email or password. Please try again.
            </Typography>
          )}
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={emailError}
              helperText={emailError ? "Please enter a valid email" : ""}
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent='space-between'>
              <Button onClick={() => setRole("STUDENT")}>Student</Button>
              <Button onClick={() => setRole("FACULTY")}>FACULTY</Button>
              <Button onClick={() => setRole("MODERATOR")}>Moderator</Button>
              <Button onClick={() => setRole("ADMINISTRATOR")}>
                Administrator
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
