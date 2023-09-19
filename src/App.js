import { useState } from "react";
import AppBar from "./Components/AppBar";
import LandingPage from "./Components/LandingPage";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";

export default function App() {
  const [reg, setReg] = useState(false);
  const [sign, setSign] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div>
      <AppBar setReg={setReg} show={show} setShow={setShow} setSign={setSign} />
      <LandingPage />
      <SignUp show={reg} onHide={setReg} setSign={setSign} />
      <LogIn show={sign} onHide={setSign} setReg={setReg} />
    </div>
  );
}
