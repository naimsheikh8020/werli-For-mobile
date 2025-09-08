import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import OTP from "./pages/OTP"
import Home from "./pages/Home"
import SinglePage from "./pages/SinglePage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<SinglePage />} />
      </Routes>
    </>
  )
}

export default App
