import "./App.css";
import { useStateValue } from "./StateProvider";
import LoginForm from "./components/LoginForm";
import Container from "@mui/material/Container";

const App = () => {
  const [{ user, loginSuccess }] = useStateValue();
  return (
    <div className="App">
      {loginSuccess ? (
        <h1>Welcome {user}</h1>
      ) : (
        <Container style={{ maxWidth: 300, marginTop: 40 }} disableGutters>
          <LoginForm />
        </Container>
      )}
    </div>
  );
};

export default App;
