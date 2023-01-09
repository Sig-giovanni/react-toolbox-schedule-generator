import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
