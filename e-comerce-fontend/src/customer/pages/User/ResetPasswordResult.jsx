import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import userApi from "../../../api/userApi";
import { logIn } from "../../../app/UserSlice";
import { useDispatch } from "react-redux";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ResetPasswordResult() {
  // const [data, setData] = useState({
  //   fullName: "",
  //   email: "",
  //   password: "",
  // });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const rePassword = formData.get("rePassword");
    const token = '';
    // console.log({
    //   rePassword: rePassword,
    //   password: password,
    // });
    const signInData = {
      token,
      password,
      rePassword,
    };

    try {
      const res = await userApi.signIn(signInData);
      if (res.message === "success") {
        // const action = logIn(userInfor);
        // console.log('action:',action)
        // dispatch(action);

        navigate("/sign-in");
      } else {
        alert("Đăng nhập thất bại: " + res.message);
      }
    } catch (error) {
      console.log("Lỗi đăng nhập: ", error);
      alert("Đã xảy ra lỗi trong quá trình đăng nhập");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
          <Typography component="h1" variant="h5">
            NHẬP MẬT KHẨU MỚI
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Nhập mật khẩu"
              type="password"
              name="password"
              autoComplete="password"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="rePassword"
              label="Nhập lại mật khẩu"
              type="password"
              id="passworePasswordrd"
              autoComplete="current-password"
            />
            <Box sx={{ textAlign: "center" }}>
              <IconButton>
                <GoogleIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              XÁC NHẬN
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
