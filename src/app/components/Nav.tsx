"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";



const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="flex flex-row justify-between items-center w-full px-5 py-3 z-10">
                <h1>Raj | Fixxoo</h1>
                <div onClick={() => setIsOpen(!isOpen)} className="flex flex-col md:hidden">
                    {!isOpen ?
                        (
                            <AlignJustify color="white" size={30} />) : (<X color="white" size={30} />)
                    }
                </div>
                {/* Small screen */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="flex md:hidden flex-col w-24 px-5 py-2 rounded-sm justify-center items-center bg-red-500 absolute right-5 top-14"
                    >
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>

                        <Link href="/projects">Projects</Link>
                        <Link href="/contact">Contact</Link>
                    </motion.div>
                )}
                {/* Big screen */}
                <div className="hidden md:flex gap-4 flex-row">
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