import SignInCard from "./pages/Login/SignIn/SignInCard";
import { Container, Grid } from "@mui/material";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <Container style={{height:"100%"}}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <SignInCard />
        <Footer />
      </Grid>
    </Container>
  );
};
