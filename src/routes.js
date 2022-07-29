import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App"
import LoginCard from "./components/cards/LoginCard";
import RegisterCard from "./components/cards/RegisterCard";
import ForgotMyPasswordCard from "./components/cards/ForgotMyPasswordCard"
import EmailCodeResetPassword from "./components/cards/EmailCodeResetPassword";

export default function SetRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}></Route>
                <Route path='/signin' element={<LoginCard/>}></Route>
                <Route path='/signup' element={<RegisterCard/>}></Route>
                <Route path="/forgotmypassword" element={<ForgotMyPasswordCard/>}></Route>
                <Route path="/emailCodeResetPassword" element={<EmailCodeResetPassword/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};