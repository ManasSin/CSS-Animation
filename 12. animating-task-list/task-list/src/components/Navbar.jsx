import { motion, useMotionValue, useScroll } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let { scrollY } = useScroll();
  let height = useMotionValue(80);

  useEffect(() => {
    return scrollY.onChange((current) => {
      let previous = scrollY.getPrevious();
      let diff = current - previous;
      let newHeight = height.get() - diff;

      height.set(Math.min(Math.max(newHeight, 50), 80));
    });
  }, [height, scrollY]);
  return (
    <div className="z-0 flex-1 overflow-y-scroll">
      <motion.header
        style={{ height }}
        className="fixed inset-x-0 flex h-20 bg-white shadow"
      >
        <Link to="/" className="pl-8">
          Home
        </Link>
        <Link to="/HeaderPage" className="pl-8">
          HeaderPage
        </Link>
        <Link to="/Email" className="pl-8">
          Email
        </Link>
        <Link to="/MultiStep" className="pl-8">
          MultiStep
        </Link>
      </motion.header>
    </div>
  );
};

export default Navbar;
