import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-4 mt-8">
      <div className="container mx-auto text-center">
        <nav className="flex justify-center space-x-4">
          <NavLink to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </NavLink>
          <NavLink to="/terms-of-service" className="hover:underline">
            Terms of Service
          </NavLink>
          <NavLink to="/contact-us" className="hover:underline">
            Contact Us
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;