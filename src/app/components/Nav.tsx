"use client"
import Link from "next/link";
import { motion } from "framer-motion";

const Nav = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center w-full px-5 py-3 z-10">
                <h1>Raj | Fixxoo</h1>
                <div className="flex gap-4 flex-row">
                    <motion.div
                        whileHover={{ scale: 1.1, color: "#ff5733" }} // Increases size & changes color
                        transition={{ duration: 0.3 }}>
                        <Link href="/">Home</Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1, color: "#ff5733" }} // Increases size & changes color
                        transition={{ duration: 0.3 }}>
                        <Link href="/about">About</Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1, color: "#ff5733" }} // Increases size & changes color
                        transition={{ duration: 0.3 }}>
                        <Link href="/projects">Projects</Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1, color: "#ff5733" }} // Increases size & changes color
                        transition={{ duration: 0.3 }}>
                        <Link href="/contact">Contact</Link>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default Nav;