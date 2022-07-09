import LoginCard from "./components/cards/LoginCard";
import { Container, Grid } from "@mui/material";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <Container style={{height:"100%"}}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <LoginCard />
        <Footer />
      </Grid>
    </Container>
  );
};
