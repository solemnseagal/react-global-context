import "./App.css";
import { useStateValue } from "./StateProvider";
import LoginForm from "./components/LoginForm";
import Container from "@mui/material/Container";
import { Typography } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import { TextField } from "@material-ui/core";

const App = () => {
  const [{ count, user }, dispatch] = useStateValue();

  const clickMe = () => {
    dispatch({ type: "INCREMENT" });
  };
  return (
    <div className="App">
      {/* <Typography variant="h3">
        {count} Hello world! from {user}
      </Typography>
      <button onClick={clickMe}> Click Me</button> */}
      <Container style={{ maxWidth: 300, marginTop: 40 }} disableGutters>
        <LoginForm />
      </Container>
    </div>
  );
};

export default App;
