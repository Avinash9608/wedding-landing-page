import React from "react";
import { NavLink } from "react-router-dom";
const RegisterNow = () => {

  const handleButtonClick = () => {
    alert('Currently not working, Under maintenance');
  };

  return (
    <div>
      <div className="relative h-screen bg-gray-50 overflow-hidden">
        {/* Animated Blobs */}
        <div className="absolute top-20 left-2 w-[500px] h-[500px] bg-[#D1208A80] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-32 w-[500px] h-[500px] bg-[#FFB20080] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="hidden xl:block absolute bottom-10 left-32 w-[500px] h-[500px] bg-[#FFB20080] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-10 right-52 w-[500px] h-[500px] bg-[#CAEEF580] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>

        {/* Login Form Section */}
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            <NavLink to="/" ><h1 className="text-red-400"> - Back to Home </h1></NavLink>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src="https://www.indtechmark.com/images/logo.svg"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
             New User, Register Now
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <NavLink
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
              Login Now
              </NavLink>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                  <input
  id="email"
  name="email"
  type="email"
  autoComplete="email"
  required
  className="block w-full appearance-none rounded-md border border-gray-500 px-3 py-2 placeholder-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm relative z-10 bg-transparent"
/>
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                  <input
  id="password"
  name="password"
  type="password"
  autoComplete="current-password"
  required
  className="block w-full bg-transparent appearance-none rounded-md border border-gray-500 px-3 py-2 placeholder-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm relative z-10"
/>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                  <input
  id="password"
  name="password"
  type="password"
  autoComplete="current-password"
  required
  className="block w-full bg-transparent appearance-none rounded-md border border-gray-500 px-3 py-2 placeholder-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm relative z-10"
/>
                  </div>
                </div>
                {/* Remember Me Checkbox */}
             
                {/* Sign In Button */}
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Register Now
                  </button>
                </div>
              </form>

              {/* Social Login */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className=" px-2 text-gray-500 z-40">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {/* Facebook */}
                  <div>
                    <a
                      href="#"
                      onClick={handleButtonClick} // Add onClick event here
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with Facebook</span>

                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  {/* Twitter */}
                  <div>
                    <a
                      href="#"
                      onClick={handleButtonClick} // Add onClick event here
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with Twitter</span>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                  </div>
                  {/* GitHub */}
                  <div>
                    <a
                      href="#"
                      onClick={handleButtonClick} // Add onClick event here
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with GitHub</span>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0a10 10 0 00-3.16 19.49c.5.1.69-.21.69-.48v-1.7c-2.6.56-3.16-1.26-3.16-1.26-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1 .07 1.54 1.03 1.54 1.03.91 1.54 2.39 1.1 2.97.84.09-.66.36-1.1.66-1.36-2.08-.24-4.28-1.03-4.28-4.58 0-1.01.36-1.84.95-2.49-.1-.24-.42-1.21.1-2.52 0 0 .79-.25 2.58.95a9.1 9.1 0 014.69 0c1.79-1.2 2.58-.95 2.58-.95.52 1.31.2 2.28.1 2.52.59.65.95 1.48.95 2.49 0 3.56-2.21 4.34-4.31 4.57.37.32.71.96.71 1.94v2.88c0 .27.19.58.69.48A10 10 0 0010 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
