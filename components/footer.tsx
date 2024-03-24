import React from "react";

const Footer = () => {
  return (
    <div className="px-4 py-6 border border-t border-slate-200">
      <ul className="text-center space-y-4 text-slate-500 mb-4 text-lg">
        <li>
          <a href="https://twitter.com/26mill_" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/muhilyas/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:muhammadilyassaya@gmail.com" target="_blank">
            Email
          </a>
        </li>
      </ul>
      <p className="text-slate-500 text-center">© {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
