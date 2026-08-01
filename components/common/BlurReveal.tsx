"use client";

import { motion } from "framer-motion";

export default function BlurReveal({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 60,
                filter: "blur(12px)",
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
            }}
            transition={{
                duration: 0.8,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
        >
            {children}
        </motion.div>
    );
}