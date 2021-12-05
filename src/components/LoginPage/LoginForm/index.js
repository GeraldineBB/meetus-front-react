import * as React from "react";
import TextField from "@mui/material/TextField";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@mui/material/Button";

export default function LoginForm() {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Champ requis";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Adresse email invalide";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <div className="login">
            <h2>Se connecter</h2>
            <Form>
              <div className="login__form__email">
                <TextField fullWidth label="Email" className="loginForm" />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div className="login__form__password">
                <TextField
                  fullWidth
                  label="Mot de passe"
                  className="loginForm"
                />
                <ErrorMessage name="password" component="div" />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div></div>
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to="/passwordForgot"
                  >
                    <span className="login__form__password__forgot">
                      Mot de passe oublié ?
                    </span>
                  </NavLink>
                </div>
              </div>

              <div className="login__form__button">
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Se connecter
                </Button>
              </div>

              <NavLink style={{ textDecoration: "none", color: "black" }} to="">
                <span className="alreadyAccount">
                  Vous possédez déjà un compte ?
                </span>
              </NavLink>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
