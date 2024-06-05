import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import ForgotPasswordForm from "../ForgotPw";

const SignInForm: React.FC = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const formikSignIn = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        padding="2rem"
        border="1px solid #ccc"
        borderRadius="8px"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
      >
        {!showForgotPassword ? (
          <>
            <Typography variant="h4" component="h1" gutterBottom>
              Sign In
            </Typography>
            <form
              onSubmit={formikSignIn.handleSubmit}
              style={{ width: "100%" }}
            >
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formikSignIn.values.email}
                onChange={formikSignIn.handleChange}
                error={
                  formikSignIn.touched.email &&
                  Boolean(formikSignIn.errors.email)
                }
                helperText={
                  formikSignIn.touched.email && formikSignIn.errors.email
                }
                margin="normal"
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formikSignIn.values.password}
                onChange={formikSignIn.handleChange}
                error={
                  formikSignIn.touched.password &&
                  Boolean(formikSignIn.errors.password)
                }
                helperText={
                  formikSignIn.touched.password && formikSignIn.errors.password
                }
                margin="normal"
              />
              <Button
                style={{ backgroundColor: "#5151C6", color: "#FFFFFF" }}
                variant="contained"
                fullWidth
                type="submit"
              >
                Sign In
              </Button>
              <Link
                component="button"
                variant="body2"
                onClick={() => setShowForgotPassword(true)}
                style={{ marginTop: "1rem", cursor: "pointer" }}
              >
                Forgot Password?
              </Link>
            </form>
          </>
        ) : (
          <ForgotPasswordForm />
        )}
      </Box>
    </Container>
  );
};

export default SignInForm;
