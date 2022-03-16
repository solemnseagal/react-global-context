import React, { useState, useEffect } from "react";
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
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LoginForm = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log("done");
    // console.log(userRef.current);
    // userRef.current.focus();
  }, []);

  const handleChange = (evt) => {
    console.log("clicked");
    setChecked(evt.target.checked);
  };
  const handleLogin = () => {
    console.log("hello world");
  };
  return (
    <Paper elevation="4">
      <CardContent>
        <Grid
          container
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
          style={{ marginTop: 20, marginBottom: 20 }}
        >
          <Avatar sx={{ width: 60, height: 60 }}>
            <LockOutlinedIcon fontSize="large" />
          </Avatar>
          <Typography variant="h4">Sign In</Typography>
        </Grid>

        <Grid>
          <Grid
            container
            spacing={2}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} fullwidth>
              <InputLabel>Username</InputLabel>
              <TextField
                variant="outlined"
                size="small"
                inputRef={(input) => input && input.focus()}
              />
            </Grid>
            <Grid item xs={12} fullwidth>
              <InputLabel>Password</InputLabel>
              <TextField variant="outlined" type={"password"} size="small" />
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
                onClick={handleLogin}
                variant="contained"
                label={'margin="normal"'}
                sx={{ backgroundColor: blue[600] }}
              >
                Log in
              </Button>
            </Grid>
            <Grid style={{ margin: 20 }} spacing={3}>
              <Link href="#" variant="body2" sx={{ color: blue[500] }}>
                Forgot your Password?
              </Link>
              <span> | </span>
              <Link href="#" sx={{ color: blue[800] }}>
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Paper>
  );
};
export default LoginForm;
