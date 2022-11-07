import styles from "./styles/cardProject.module.css";

import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import { useRef, useEffect, useState } from "react";

const CardProject = ({ scroll, card, setCursorVariant }) => {
    const { height } = useWindowDimensions();
    const [show, setShow] = useState(false);
    const ref = useRef();
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
    useEffect(() => {
        const onScroll = () => {
            const screenY = ref.current.getBoundingClientRect().y;
            const bottom = screenY - height + 200;
            if (bottom < 0) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        onScroll();
    }, [scroll]);
    return (
        <div ref={ref}>
            <div
                className={`${styles.body} ${show ? styles.show : ""}`}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                onClick={() => window.open(card.link, "_blank")}
            >
                <div className={styles.image}>
                    <img src={card.image} alt="project-image" />
                </div>
                <p className={styles.name}>{card.name}</p>
                <p className={styles.description}>{card.description}</p>
            </div>
        </div>
    );
};

export default CardProject;
