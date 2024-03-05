import "../scss/nav.scss";
import ToggleButton from "./ToggleButton";
import Links from "./Links";
import { useState } from "react";
import { motion } from "framer-motion";

function Nav() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.nav className="sidebar" animate={open ? "open" : "closed"}>
      <ToggleButton open={setOpen} />
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
    </motion.nav>
  );
}

export default Nav;
