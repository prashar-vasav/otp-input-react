import React, { useRef, useState } from "react";
import styles from "./OtpInput.module.css";

export default function OtpInput({ numberOfDigits }) {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const otpBoxRef = useRef([]);

  function changeHandler(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);
    if (value && index < numberOfDigits - 1)
      otpBoxRef.current[index + 1].focus();
    console.log(otp);
  }

  function keyHandler(e, index) {
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
      otpBoxRef.current[index + 1].focus();
    }
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxRef.current[index - 1].focus();
    }
  }

  return (
    <div className="container">
      <h2>Enter OTP</h2>
      <main className="items">
        {otp.map((val, index) => (
          <input
            key={index}
            value={val}
            maxLength={1}
            onChange={(e) => changeHandler(e.target.value, index)}
            onKeyUp={(e) => keyHandler(e, index)}
            ref={(reference) =>
              {console.log(reference);
                return (otpBoxRef.current[index] = reference)}
            }
          />
        ))}
      </main>
    </div>
  );
}
