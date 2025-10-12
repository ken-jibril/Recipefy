import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const links = [
    { path: "/", label: "Home" },
    { path: "/recipes", label: "Recipes" },
  ];

  return (
    <nav className="relative flex gap-10 my-4 py-2 px-4 text-xl bg-black shadow-xl items-center justify-between rounded-full max-w-fit mx-auto">
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <div key={link.path} className="relative">
            <Link
              to={link.path}
              className={`relative z-10 px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                isActive ? "text-black" : "text-white"
              }`}
            >
              {link.label}
            </Link>

            {/* Shady hover light */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"
            />

            {/* Active link background */}
            {isActive && (
              <motion.div
                layoutId="active-bg"
                className="absolute inset-0 bg-white rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default Navbar;
