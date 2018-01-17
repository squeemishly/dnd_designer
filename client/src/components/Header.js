import React from "react";

const header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo">DND Designer</a>
        <a href="/auth/google" className="right">Login with Google</a>
      </div>
    </nav>
  );
};

export default header;
