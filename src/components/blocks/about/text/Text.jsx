import styles from "./styles/text.module.css";

import TextItem from "../textItem/TextItem";

const Text = ({ scroll }) => {
    return (
        <div className="background">
            <div className={`${styles.body} container`}>
                <TextItem text={"JavaScript Pre-Middle"} scroll={scroll} />{" "}
                <br />
                <TextItem text={"Front-End Developer"} scroll={scroll} /> <br />
            </div>
        </div>
    );
};

export default Text;
