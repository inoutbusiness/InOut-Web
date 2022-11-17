import { BrowserRouter, Route, Routes } from "react-router-dom"

import App from "./App"
import SignInCard from "./pages/Login/SignIn/SignInCard"
import SignUpCard from "./pages/Login/SignUp/SignUpCard"
import ForgotMyPasswordCard from "./pages/Login/ForgotPassword/ForgotMyPasswordCard"
import EmailCodeResetPassword from "./pages/Login/ForgotPassword/EmailCode/EmailCodeResetPassword"
import ResetPasswordCard from "./pages/Login/ForgotPassword/ResetPassword/ResetPasswordCard"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import ProductRegistrationCard from "./pages/Products/Register/ProductRegistrationCard"
import ProductVisualizationCard from "./pages/Products/Visualization/ProductVisualizationCard"

export default function SetRoutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/signin' element={<SignInCard/>}></Route>
        <Route path='/signup' element={<SignUpCard/>}></Route>
        <Route path="/forgotmypassword" element={<ForgotMyPasswordCard/>}></Route>
        <Route path="/emailCodeResetPassword/:accountId" element={<EmailCodeResetPassword/>}></Route>
        <Route path="/resetPassword/:accountId" element={<ResetPasswordCard/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/productRegistration" element={<ProductRegistrationCard/>}></Route>
        <Route path="/productVisualization" element={<ProductVisualizationCard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};