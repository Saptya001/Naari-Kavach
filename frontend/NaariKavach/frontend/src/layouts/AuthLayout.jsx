import React from "react";

const AuthLayout = ({ children, title = "Welcome Back" }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-purple-400 px-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
          {title}
        </h1>

        {/* Auth Page Content */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
