import styles from "./styles/lineText.module.css";

import { useRef, useEffect, useState } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const LineText = ({ scroll }) => {
    const { height } = useWindowDimensions();
    const [left, setLeft] = useState();
    const ref = useRef();
    useEffect(() => {
        const onScroll = () => {
            const screenY = ref.current.getBoundingClientRect().y;
            const percentages = screenY / (height / 100);
            if (percentages > 100) {
                setLeft(100);
            } else if (percentages < -100) {
                setLeft(-100);
            } else {
                setLeft(percentages);
            }
        };
        onScroll();
    }, [scroll]);
    return (
        <div className={styles.body}>
            <p
                className={styles.text}
                ref={ref}
                style={{
                    transform: `translateX(${left + 50}%) translateY(-50%)`,
                }}
            >
                Люблю свою работу
            </p>
        </div>
    );
};

export default LineText;
