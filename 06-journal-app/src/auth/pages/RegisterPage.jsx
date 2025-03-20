import { Link as LinkM, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { AuthLayout } from "../layout/Authlayout";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startRegisterWithEmailPassword } from "../../store/auth/thunks";
import { enqueueSnackbar } from "notistack";
import { AUTH_STATUS } from "../../store/auth/types/auth";
const formValidations = {
  email: [(value) => value.includes("@"), "Email must have an @"],
  password: [
    (value) => value.length >= 6,
    "Password must have more than 6 letters",
  ],
  displayName: [(value) => value.length >= 1, "Name is required"],
};
const formData = {
  email: "",
  password: "",
  displayName: "",
};
export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    displayNameValid,
    emailValid,
    passwordValid,
    email,
    password,
    displayName,
    onInputChange,
    isFormValid,
  } = useForm(formData, formValidations);
  const { errorMessage, status } = useSelector((state) => state.auth);
  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(isFormValid);
    if (isFormValid) return;
    dispatch(startRegisterWithEmailPassword(email, password, displayName));
    if (errorMessage) {
      enqueueSnackbar(errorMessage, { variant: "error" });
    }
  };
  const isAuth = status === AUTH_STATUS.authenticated;

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth]);

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid container direction="column" spacing={1}>
          <Grid size={{ xs: 12 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="John doe"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ marginBlock: 2 }}
            justifyContent={"end"}
          >
            <Grid size={{ xs: 12 }}>
              <Button type="submit" fullWidth variant="contained">
                <Typography>Crear cuenta</Typography>
              </Button>
            </Grid>

            <Grid
              container
              direction={"row"}
              alignItems={"end"}
              justifyContent={"space-evenly"}
            >
              <Typography sx={{ mr: 1 }}>
                Do you already have an account?
              </Typography>
              <LinkM component={Link} color="inherit" to="/auth/login">
                Login
              </LinkM>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
