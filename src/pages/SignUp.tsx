import { Link } from "react-router-dom";
import logo from "../assets/Group.png";
import arrowLeft from "../assets/arrow-left.png";
import google from "../assets/google.png"
import appel from "../assets/appel.png"

const SignUp = () => {
    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-10 flex flex-col items-center">

            {/* Header with back arrow + logo */}
            <div className="mt-6 w-full max-w-lg flex items-center justify-start">
                <img src={arrowLeft} alt="Back arrow" className="w-6 h-6 mr-3 cursor-pointer" />
                <img src={logo} alt="Company Logo" className="h-10" />
            </div>

            {/* Title */}
            <div className="w-full max-w-lg mt-10 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">Create an account</h1>
                <p className="text-white text-lg">
                    Begin your journey to understanding dreams today.
                </p>
            </div>

            {/* Sign Up Form */}
            <form className="w-full max-w-lg mt-8 space-y-6">

                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                        <label htmlFor="first-name" className="block text-xl font-semibold mb-3">
                            First name
                        </label>
                        <input
                            type="text"
                            id="first-name"
                            placeholder="First name"
                            className="w-full p-4 rounded-xl bg-[#625D5D] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="last-name" className="block text-xl font-semibold mb-3">
                            Last name
                        </label>
                        <input
                            type="text"
                            id="last-name"
                            placeholder="Last name"
                            className="w-full p-4 rounded-xl bg-[#625D5D] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
                        />
                    </div>
                </div>


                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-xl font-semibold mb-3">
                        Email
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full pl-12 p-4 rounded-xl bg-[#625D5D] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
                        />
                    </div>
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password" className="block text-xl font-semibold mb-3">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full p-4 rounded-xl bg-[#625D5D] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
                    />
                </div>

                {/* Confirm Password */}
                <div>
                    <label htmlFor="confirm-password" className="block text-xl font-semibold mb-3">
                        Confirm password
                    </label>
                    <input
                        type="password"
                        id="confirm-password"
                        placeholder="Confirm password"
                        className="w-full p-4 rounded-xl bg-[#625D5D] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
                    />
                </div>

                {/* Country Dropdown */}
                <div>
                    <label htmlFor="country" className="block text-xl font-semibold mb-3">
                        Country
                    </label>
                    <div className="relative">
                        <select
                            id="country"
                            className="w-full p-4 appearance-none rounded-xl bg-[#625D5D] text-white placeholder-whitefocus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg pr-10"
                        >
                            <option value="">Add yours</option>
                            <option value="usa">United States</option>
                            <option value="can">Canada</option>
                            <option value="uk">United Kingdom</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                            <svg
                                className="fill-current h-6 w-6 transform rotate-180"
                                viewBox="0 0 20 20"
                            >
                                <path d="M7 10l5 5 5-5H7z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-center mt-6">
                    <input
                        id="terms-conditions"
                        type="checkbox"
                        className="h-5 w-5 text-yellow-500 rounded border-gray-600 focus:ring-yellow-500 bg-[#625D5D]"
                    />
                    <label
                        htmlFor="terms-conditions"
                        className="ml-3 text-base text-gray-300"
                    >
                        I agree to the{" "}
                        <Link to="/terms" className="text-yellow-400 hover:underline">
                            Terms & conditions
                        </Link>
                    </label>
                </div>

                {/* Submit Button */}
                <Link to={`login`}>
                    <button
                        type="submit"
                        className="w-full py-4 rounded-full text-black font-bold text-xl mt-4
                     bg-gradient-to-r from-[#FBB040] to-[#F9ED32]
                     hover:from-[#FBB040] hover:to-[#F9ED32] hover:opacity-90
                     focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition duration-300"
                    >
                        Create account
                    </button>
                </Link>
            </form>
            <div className="flex items-center w-full gap-5 mt-5">
                <div className="h-[1px] w-full bg-white"></div>
                <p>or</p>
                <div className="h-[1px] w-full bg-white"></div>
            </div>
            <div className="flex gap-5 mt-8">
                <button className="border rounded-lg px-8 py-4 bg-[#625D5D]">
                    <img className="w-[24px] h-[24px]" src={google} />
                </button>
                <button className="border rounded-lg px-8 py-4 bg-[#625D5D]"><img className="w-[24px] h-[24px]" src={appel} /></button>
            </div>
            <div className="mt-6">
                <p className="text-lg">
                    Already have an account?{" "}
                    <a
                        className="bg-gradient-to-r from-[#FBB040] to-[#F9ED32] bg-clip-text text-transparent font-semibold"
                        href="/login"
                    >
                        Log in
                    </a>
                </p>
            </div>

        </div>
    );
};

export default SignUp;
