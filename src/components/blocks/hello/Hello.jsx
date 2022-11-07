import styles from "./styles/hello.module.css";

const Hello = ({ setCursorVariant }) => {
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
    return (
        <div className={styles.body}>
            <h1 className={styles.title}>
                <span onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    Hello World 👋
                </span>
                <br />
                <span onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    Меня зовут Гриша{" "}
                </span>
                <br />
                <span onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    Я создаю вещи для Интернета
                </span>
            </h1>
        </div>
    );
};

export default Hello;
