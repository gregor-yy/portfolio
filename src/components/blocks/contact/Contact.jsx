import styles from "./styles/contact.module.css";
import { MdConnectWithoutContact, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

import Me from "../../../assets/images/contact/me.webp";
import { useState } from "react";

const Contact = ({ setCursorVariant }) => {
    const [open, setOpen] = useState(false);
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>
                <MdConnectWithoutContact />
                Контакты
            </h4>
            <div className={styles.body}>
                <div className={`${styles.card} ${open ? styles.openCard : ""}`}>
                    <img src={Me} alt="me" />
                    <p className={styles.name}>
                        Григорий <br />
                        Жидок
                    </p>
                    <div className={styles.buttonContainer}>
                        <button
                            className={`${styles.button} ${open ? styles.buttonOpen : ""}`}
                            onClick={() => setOpen((prev) => !prev)}
                            onMouseEnter={textEnter}
                            onMouseLeave={textLeave}
                        ></button>
                    </div>

                    <div className={`${styles.info} ${open ? styles.infoOpen : ""}`}>
                        <div className={styles.itemInfo}>
                            <MdEmail size={24} /> Почта: <a href="mailto: zhidokGD@gmail.com">zhidokGD@gmail.com</a>
                        </div>
                        <div className={styles.itemInfo}>
                            <BsFillTelephoneFill size={24} /> Телефон: <a href="tel:+79182286959">+7 918 228-69-59</a>
                        </div>
                        <div className={styles.itemInfo}>
                            <FaTelegramPlane size={24} /> Telegram <a href="https://t.me/blackrcn">@blackrcn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
