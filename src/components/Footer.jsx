import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <span className="font-bold">© 2024 by fatima👩🏻‍💻</span>
        </div>
        <div>
          <a
            href="https://github.com/FaFathr"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
           My GitHub
          </a>
          <span>Email👉🏼: fatimaataheriiot77@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
