import styles from "./styles/grid.module.css";
import { useState, useEffect, useRef } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import Card01 from "../../../assets/images/grid/first/card-01.png";
import Card02 from "../../../assets/images/grid/first/card-02.png";
import Card03 from "../../../assets/images/grid/first/card-03.png";

import Card04 from "../../../assets/images/grid/second/card-04.png";
import Card05 from "../../../assets/images/grid/second/card-05.png";
import Card06 from "../../../assets/images/grid/second/card-06.png";

import Card07 from "../../../assets/images/grid/three/card-07.png";
import Card08 from "../../../assets/images/grid/three/card-08.png";
import Card09 from "../../../assets/images/grid/three/card-09.png";

import Card10 from "../../../assets/images/grid/four/card-10.png";
import Card11 from "../../../assets/images/grid/four/card-11.png";
import Card12 from "../../../assets/images/grid/four/card-12.png";

const first = [
    { id: 1, src: Card01, alt: "card-01" },
    { id: 2, src: Card02, alt: "card-02" },
    { id: 3, src: Card03, alt: "card-03" },
];

const second = [
    { id: 1, src: Card04, alt: "card-04" },
    { id: 2, src: Card05, alt: "card-05" },
    { id: 3, src: Card06, alt: "card-06" },
];

const three = [
    { id: 1, src: Card07, alt: "card-07" },
    { id: 2, src: Card08, alt: "card-08" },
    { id: 3, src: Card09, alt: "card-09" },
];

const four = [
    { id: 1, src: Card10, alt: "card-10" },
    { id: 2, src: Card11, alt: "card-11" },
    { id: 3, src: Card12, alt: "card-12" },
];

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
