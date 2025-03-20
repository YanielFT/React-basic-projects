import { Link as LinkM, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/Authlayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import { AUTH_STATUS } from "../../store/auth/types/auth";
import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
const formValidations = {
  email: [(value) => value.includes("@"), "Email must have an @"],
  password: [
    (value) => value.length >= 6,
    "Password must have more than 6 letters",
  ],
};
const formaData = {
  email: "",
  password: "",
};
export const LoginPage = () => {
  const navigate = useNavigate();
  const { emailValid, passwordValid, formState, onInputChange } = useForm(
    formaData,
    formValidations
  );
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isAuth = status === AUTH_STATUS.authenticated;
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    console.log("isAuth", isAuth);
    if (isAuth) navigate("/");
  }, [isAuth]);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(formState);
    if (!formState) return;
    dispatch(startLoginWithEmailPassword(formState.email, formState.password));
    if (errorMessage) {
      enqueueSnackbar(errorMessage, { variant: "error" });
    }
  };
  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container direction="column" spacing={1}>
          <Grid size={{ xs: 12 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              value={formState.email}
              name="email"
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
              value={formState.password}
              name="password"
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
            <Grid size={{ xs: 12, md: 6 }}>
              <Button
                disabled={isAuth}
                type="submit"
                fullWidth
                variant="contained"
              >
                <Typography>Login</Typography>
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Button
                disabled={isAuth}
                onClick={onGoogleSignIn}
                fullWidth
                variant="contained"
              >
                <Google />
                <Typography ml={1}>Google</Typography>
              </Button>
            </Grid>

            <Grid container direction={"row"} justifyContent={"end"}>
              <LinkM component={Link} color="inherit" to="/auth/register">
                Crear una cuenta
              </LinkM>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
