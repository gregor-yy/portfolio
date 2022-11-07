import styles from "./styles/textItem.module.css";

import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import { useRef, useEffect, useState } from "react";

const TextItem = ({ text, scroll, start }) => {
    const { height } = useWindowDimensions();
    const [widthMask, setWidthMask] = useState(100);
    const ref = useRef();
    const smooth = 10;
    function MyRound(val) {
        return Math.round(val / smooth) * smooth;
    }

    useEffect(() => {
        const onScroll = () => {
            const screenY = ref.current.getBoundingClientRect().y;
            const newWidthMask =
                100 - MyRound(100 - screenY / (height / 100 / 2) + 45);
            if (newWidthMask > 100) {
                setWidthMask(100);
            } else if (newWidthMask < 0) {
                setWidthMask(0);
            } else {
                setWidthMask(newWidthMask);
            }
        };
        onScroll();
    }, [scroll]);

    return (
        <div
            className={styles.content}
            ref={ref}
            style={{ marginTop: start ? "48px" : "0" }}
        >
            <p className={styles.text}>
                {start ? <>• </> : ""}
                {text}
            </p>
            <span
                className={styles.mask}
                style={{ width: `${widthMask}%` }}
            ></span>
        </div>
    );
};

export default TextItem;
