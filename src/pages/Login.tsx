import React from 'react';
import { Link } from 'react-router-dom';

// Import assets
import logo from "../assets/Group.png";
import arrowLeft from "../assets/arrow-left.png";
import google from "../assets/google.png";
import apple from "../assets/appel.png"; // Renamed for clarity, assuming 'appel' is meant to be 'apple'

const Login = () => {
    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-10 flex flex-col items-center">
            {/* Top Navigation/Logo Section */}
            <div className='mt-6 w-full max-w-lg flex items-center justify-start'>
                <Link to="/" className="flex items-center"> {/* Link back to signup or home */}
                    <img src={arrowLeft} alt="Back arrow" className="w-6 h-6 mr-3 cursor-pointer" />
                    <img src={logo} alt="Company Logo" className="h-10" />
                </Link>
            </div>

            {/* Welcome Back Section */}
            <div className="w-full max-w-lg mt-10 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
                <p className="text-gray-400 text-lg">Please log in to your account and start the adventure</p>
            </div>

            {/* Login Form */}
            <form className="w-full max-w-lg mt-8 space-y-6">
                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-xl font-semibold mb-3">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your Email or phone number"
                        className="w-full p-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
                    />
                </div>

                {/* Password Input */}
                <div>
                    <label htmlFor="password" className="block text-xl font-semibold mb-3">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full p-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
                    />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-yellow-500 rounded border-gray-600 focus:ring-yellow-500 bg-gray-700"
                        />
                        <label htmlFor="remember-me" className="ml-3 text-base text-gray-300">
                            Remember me
                        </label>
                    </div>
                    <Link to="/forgot-password" className="text-yellow-400 hover:underline text-base">
                        Forgot password?
                    </Link>
                </div>

                {/* Log In Button */}
                <button
                    type="submit"
                    className="w-full py-4 rounded-full text-black font-bold text-xl mt-8
                               bg-gradient-to-r from-[#FBB040] to-[#F9ED32]
                               hover:from-[#FBB040] hover:to-[#F9ED32] hover:opacity-90
                               focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition duration-300"
                >
                    Log In
                </button>
            </form>

            {/* OR Divider */}
            <div className="w-full max-w-lg flex items-center my-8">
                <hr className="flex-grow border-gray-700" />
                <span className="px-4 text-gray-400">or</span>
                <hr className="flex-grow border-gray-700" />
            </div>

            {/* Social Logins */}
            <div className="w-full max-w-lg flex space-x-4">
                <button
                    className="flex-1 flex items-center justify-center p-4 rounded-xl bg-gray-700 hover:bg-gray-600 transition duration-300"
                >
                    <img src={google} alt="Google logo" className="w-6 h-6 mr-3" />
                    {/* <span className="text-white text-lg">Google</span> */} {/* Add text if desired */}
                </button>
                <button
                    className="flex-1 flex items-center justify-center p-4 rounded-xl bg-gray-700 hover:bg-gray-600 transition duration-300"
                >
                    <img src={apple} alt="Apple logo" className="w-6 h-6 mr-3" />
                    {/* <span className="text-white text-lg">Apple</span> */} {/* Add text if desired */}
                </button>
            </div>

            {/* Don't have an account? Sign up */}
            <div className="w-full max-w-lg mt-10 text-center text-lg">
                <span className="text-gray-300">Don't have an account? </span>
                <Link to="/" className="text-yellow-400 hover:underline font-semibold">Sign up</Link>
            </div>
        </div>
    );
};

export default Login;