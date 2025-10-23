import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const handleMove = (e) => {
            if (e.touches && e.touches.length > 0) {
                setPosition({
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY,
                });
            } else {
                setPosition({ x: e.clientX, y: e.clientY });
            }
        };

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("touchmove", handleMove);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("touchmove", handleMove);
        };
    }, []);

    return (
        <>

            <motion.div
                className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]"
                animate={{ x: position.x - 12, y: position.y - 12 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{
                    background: "radial-gradient(circle, var(--orange), var(--red))",
                    boxShadow: "0 0 15px var(--orange)",
                    mixBlendMode: "difference",
                    opacity: 0.8,
                }}
            />


            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
                animate={{ x: position.x - 4, y: position.y - 4 }}
                transition={{ type: "spring", stiffness: 800, damping: 35 }}
                style={{
                    background: "var(--orange)",
                    boxShadow: "0 0 8px var(--orange)",
                }}
            />
        </>
    );
};

export default CustomCursor;
