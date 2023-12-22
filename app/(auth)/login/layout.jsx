import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-100">
        {children}
        </body>
    </html>
  );
};

export default AuthLayout;
