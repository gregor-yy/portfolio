import styles from "./styles/blockProjects.module.css";

import CardProject from "../cardProject.jsx/CardProject";
import { IoCheckmarkDone } from "react-icons/io5";

import { leftLine, rightLine } from "../../../../helpers/projects";

const BlockProjects = ({ scroll, setCursorVariant }) => {
    return (
        <div className="background">
            <div className={styles.container}>
                <h2 className={styles.title}>
                    <IoCheckmarkDone />
                    Проекты
                </h2>
                <div className={styles.body}>
                    <div className={styles.body_item}>
                        {leftLine.map((card) => (
                            <CardProject key={card.id} scroll={scroll} card={card} setCursorVariant={setCursorVariant} />
                        ))}
                    </div>
                    <div className={styles.body_item}>
                        {rightLine.map((card) => (
                            <CardProject key={card.id} scroll={scroll} card={card} setCursorVariant={setCursorVariant} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockProjects;
