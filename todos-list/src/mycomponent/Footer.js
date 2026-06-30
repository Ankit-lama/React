import React from 'react';

const Footer = () => {
  let footerStyle = {
    position: "relative",
    height: "60px",
    width: "100%"
  };
  return (
    <footer className="bg-dark text-light py-3 mt-auto" style={footerStyle}>
  <p className="text-center">Copyright © MyTodosList.com</p>
</footer>
  );
};

export default Footer;