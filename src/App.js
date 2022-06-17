import LoginCard from "./components/cards/LoginCard";
import { Container, Grid } from "@mui/material";

function App() {
  
  return (
    <Container style={{height:"100%"}}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <LoginCard />
      </Grid>
    </Container>
  );
}

export default App;
