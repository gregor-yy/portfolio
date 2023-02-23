import styles from "./styles/cardStack.module.css";

const CardStack = ({ stack }) => {
    return (
        <div className={styles.body}>
            <div className={styles.image}>
                <img src={stack.src} alt="stack-image" />
            </div>
            <p className={styles.name}>{stack.name}</p>
        </div>
    );
};

export default CardStack;
