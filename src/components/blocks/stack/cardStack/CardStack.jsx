import styles from "./styles/cardStack.module.css";

const CardStack = ({ stack }) => {
    return (
        <div className={styles.body}>
            <div>
                <img
                    className={styles.image}
                    src={stack.src}
                    alt="stack-image"
                />
            </div>
            <div className={styles.text}>
                <p className={styles.name}>{stack.name}</p>
                <p className={styles.description}>{stack.description}</p>
            </div>
        </div>
    );
};

export default CardStack;
