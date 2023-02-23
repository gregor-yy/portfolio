import styles from "./styles/grid.module.css";
import { useState, useEffect, useRef } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import { first, second, three, four } from "../../../helpers/grid";

const Grid = ({ scroll }) => {
    const { height } = useWindowDimensions();
    const [move, setMove] = useState();
    const ref = useRef();
    useEffect(() => {
        const onScroll = () => {
            const screenY = ref.current.getBoundingClientRect().y;
            const percentages = screenY / (height / 100) / 10;
            if (percentages > 10) {
                setMove(10);
            } else if (percentages < -30) {
                setMove(-30);
            } else {
                setMove(percentages);
            }
        };
        onScroll();
    }, [scroll]);
    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.body}>
                <div className={styles.line} style={{ transform: `translateX(${move}%)` }}>
                    {first.map((card) => (
                        <div key={card.id} className={styles.image}>
                            <img src={card.src} alt={card.alt} />
                        </div>
                    ))}
                </div>
                <div className={styles.line} style={{ transform: `translateX(${-move}%)` }}>
                    {second.map((card) => (
                        <div key={card.id} className={styles.image}>
                            <img src={card.src} alt={card.alt} />
                        </div>
                    ))}
                </div>
                <div className={styles.line} style={{ transform: `translateX(${move}%)` }}>
                    {three.map((card) => (
                        <div key={card.id} className={styles.image}>
                            <img src={card.src} alt={card.alt} />
                        </div>
                    ))}
                </div>
                <div className={styles.line} style={{ transform: `translateX(${-move}%)` }}>
                    {four.map((card) => (
                        <div key={card.id} className={styles.image}>
                            <img src={card.src} alt={card.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Grid;
