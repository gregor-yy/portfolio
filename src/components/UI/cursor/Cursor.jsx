import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles/cursor.module.css";

const Cursor = ({ cursorVariant }) => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });
    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);
    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            height: 150,
            width: 150,
            backgroundColor: "rgb(255, 255, 255)",
            mixBlendMode: "difference",
        },
    };
    return <motion.div className={styles.cursor} variants={variants} animate={cursorVariant}></motion.div>;
};

export default Cursor;
