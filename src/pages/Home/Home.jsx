import { Footer } from "../../components/Footer/Footer"
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Home(){
  return (
    <div>
      <Sidebar content={
        <div>
          <h1>conteudo aqui</h1>
        </div>
      }/>
      <Footer />
    </div>
  );
}