import styles from "./styles/blockStack.module.css";

import CardStack from "../cardStack/CardStack";
import { GiTechnoHeart } from "react-icons/gi";

import { stack } from "../../../../helpers/stack";

const BlockStack = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                <GiTechnoHeart />
                Стэк технологий
            </h3>
            <div className={styles.body}>
                {stack.map((stack) => (
                    <CardStack key={stack.id} stack={stack} />
                ))}
            </div>
        </div>
    );
};

export default BlockStack;
