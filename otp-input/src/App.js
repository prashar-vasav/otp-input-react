import React from "react";
import OtpInput from "./OtpInput";

function App() {
  return (
    <div>
      <h1>React OTP Input System</h1>
      <OtpInput numberOfDigits={4}/>
    </div>
  );
}

export default App;
