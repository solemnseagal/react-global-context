import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { blue } from "@mui/material/colors";
import InputLabel from "@mui/material/InputLabel";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useStateValue } from "../StateProvider";
import { constants } from "../constants";
import { hash } from "../users";

const LoginForm = () => {
  // strictly for use on componentDidUpdate with useEffect
  const isMount = useRef(true);

  // Global State
  const [, dispatch] = useStateValue();

  // 'remember me' check state
  const [checked, setChecked] = useState(false);

  // Component specific internal states

  // username state change
  const [username, setUsername] = useState("");

  // password state change
  const [password, setPassword] = useState("");

  // username error state change
  const [usernameError, setUsernameError] = useState(false);

  // Password errot state change
  const [passwordError, setPasswordError] = useState(false);

  // const hash = a.reduce((initialValue, currentValue) => {
  //   initialValue[currentValue.username] = currentValue.password;
  //   return initialValue;
  // }, {});

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else {
      setChecked(e.target.checked);
    }
  };

  const errorCheck = () => {
    setUsernameError(username === "");
    setPasswordError(password === "");
  };

  useEffect(() => {
    if (isMount.current) {
      isMount.current = false;
    } else {
      errorCheck();
    }
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // hash

    for (let key of hash) {
      if (key[0] === username.toLowerCase() && atob(key[1]) === password) {
        dispatch({
          type: constants.LOGIN,
        });

        dispatch({
          type: constants.SETUSER,
          username: username[0].toUpperCase() + username.slice(1).toLowerCase(),
        });
      }
    }

    // clear out input fields if any error
    if (usernameError || passwordError) {
      setPassword("");
    } else {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <Paper elevation={4}>
      <CardContent>
        <Grid
          container
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
          style={{ marginTop: 20, marginBottom: 20 }}
        >
          <AccountCircleOutlinedIcon sx={{ color: "gray", fontSize: 70 }} />

          <Typography variant="h4">Sign In</Typography>
        </Grid>

        <Grid>
          <form noValidate onSubmit={handleSubmit}>
            <Grid
              container
              spacing={2}
              direction={"column"}
              justify={"center"}
              alignItems={"center"}
            >
              <Grid item xs={12}>
                <InputLabel>Username</InputLabel>
                <TextField
                  id="username"
                  required
                  variant="outlined"
                  size="small"
                  autoFocus
                  // inputRef={(input) => input && input.focus()}
                  autoComplete="off"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  error={usernameError}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Password</InputLabel>
                <TextField
                  id="password"
                  required
                  onChange={handleChange}
                  // inputRef={(input) => input && input.focus()}
                  variant="outlined"
                  type={"password"}
                  size="small"
                  name="password"
                  value={password}
                  error={passwordError}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              direction={"column"}
              justify={"center"}
              alignItems={"center"}
            >
              <Grid item xs={12} style={{ margin: 10 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      sx={{
                        "&.Mui-checked": { color: blue[600] },
                      }}
                      name="checkbox"
                      onChange={handleChange}
                      label={"Keep me logged in"}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  }
                  label="Keep me logged in"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  label={'margin="normal"'}
                  sx={{ backgroundColor: blue[600] }}
                >
                  Log in
                </Button>
              </Grid>
              <Grid item style={{ margin: 5 }}>
                <Link href="#" variant="body2" sx={{ color: blue[500] }}>
                  Forgot your Password?
                </Link>
                <span> | </span>
                <Link href="#" sx={{ color: blue[800] }}>
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </CardContent>
    </Paper>
  );
};
export default LoginForm;
