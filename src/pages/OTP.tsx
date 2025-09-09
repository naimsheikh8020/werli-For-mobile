import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const OTP = () => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const value = e.target.value.slice(0, 1); 
        const newOtp = [...otp];
        newOtp[i] = value.replace(/[^0-9]/g, "");
        setOtp(newOtp);

        if (value && i < otp.length - 1) {
            inputs.current[i + 1]?.focus(); 
        }
    };


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
        if (e.key === "Backspace" && otp[i] === "" && i > 0) {
            inputs.current[i - 1]?.focus();
        }
    };

    const isFormValid = otp.every(digit => digit !== "");

    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-10 flex flex-col items-center justify-center">
            {/* Main content container with max-width for better centering */}
            <div className="w-full max-w-lg text-center">
                {/* Mail Icon */}
                <div className="bg-gray-700 p-6 rounded-full mb-8 inline-block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13h9a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                </div>

                {/* Text */}
                <h1 className="text-3xl font-bold mb-2">Please check your email.</h1>
                <p className="text-gray-400 text-lg mb-8">
                    We've sent a code to <span className="font-semibold text-white">olivia@untitledui.com</span>
                </p>

                {/* OTP Inputs */}
                <div className="flex justify-center space-x-4 mb-6">
                    {otp.map((digit, i) => (
                        <input
                            key={i}
                            ref={(el) => (inputs.current[i] = el)}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e, i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                            className="w-16 h-16 text-center text-4xl font-bold rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    ))}
                </div>

                {/* Resend Link */}
                <p className="text-gray-400 mb-10">
                    Didn't get a code? <Link to="#" className="text-yellow-400 hover:underline">Click to resend.</Link>
                </p>

                {/* Buttons */}
                <div className="flex space-x-4 w-full">
                    <button
                        onClick={() => navigate('/')}
                        className="flex-1 py-4 rounded-full text-white font-bold text-xl bg-gray-700 hover:bg-gray-600 transition duration-300">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className={`flex-1 py-4 rounded-full text-black font-bold text-xl
                        bg-gradient-to-r from-[#FBB040] to-[#F9ED32]
                        hover:from-[#FBB040] hover:to-[#F9ED32] hover:opacity-90
                        focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition duration-300
                        ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!isFormValid}
                    >
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OTP;