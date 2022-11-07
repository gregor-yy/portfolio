import styles from "./styles/blockProjects.module.css";

import studVesna from "../../../../assets/images/projects/studvesna.webp";
import webJox from "../../../../assets/images/projects/webjox.webp";
import dentalGood from "../../../../assets/images/projects/dentalgood.webp";
import mari from "../../../../assets/images/projects/mari.webp";

import sellerLab from "../../../../assets/images/projects/sellerlab.webp";
import moon from "../../../../assets/images/projects/moon.webp";
import welson from "../../../../assets/images/projects/welson.webp";

import CardProject from "../cardProject.jsx/CardProject";

import { IoCheckmarkDone } from "react-icons/io5";

const leftData = [
    {
        id: 1,
        name: "Юбилейная студенческая весна 2022",
        image: studVesna,
        description:
            'Сайт фестиваля "Студенческая Весна 2022" для исторического посвещения в фестиваль, отслеживания новостей и получения билетов.',
        link: "https://studvesna63.ru/",
    },
    {
        id: 2,
        name: "WebJOX",
        image: webJox,
        description: "Лицевой сайт компании WebJOX.",
        link: "https://webjox.ru/",
    },
    {
        id: 3,
        name: "Dental Good",
        image: dentalGood,
        description: "Сайт современной немецкой стоматологии.",
        link: "https://zahnimplantate-all-on-x.com/",
    },
    {
        id: 4,
        name: "M.A.R.I.",
        image: mari,
        description: 'Сайт настольной игры "M.A.R.I. и безумная фабрика".',
        link: "https://m.a.r.i.lifestyleltd.ru/",
    },
];

const rightData = [
    {
        id: 1,
        name: "Seller Lab",
        image: sellerLab,
        description: "Cервис аналитики и управления продажами на Ozon.",
        link: "https://sellerlab.io/",
    },
    {
        id: 2,
        name: "Добро пожаловать на луну",
        image: moon,
        description:
            'Сайт настольной игры "Добро пожаловать на Луну", на основе него создавался конструктор аналогичных сайтов для настольных игр, разработку которого я курировал.',
        link: "https://welcome.lifestyleltd.ru/",
    },
    {
        id: 3,
        name: "Велсон",
        image: welson,
        description: "Сайт препарата для улучшения качества сна.",
        link: "http://a0714564.xsph.ru/",
    },
];

const BlockProjects = ({ scroll, setCursorVariant }) => {
    return (
        <div className="background">
            <div className={styles.container}>
                <h2 className={styles.title}>
                    <IoCheckmarkDone />
                    Лучшие проекты
                </h2>
                <div className={styles.body}>
                    <div className={styles.body_item}>
                        {leftData.map((card) => (
                            <CardProject scroll={scroll} key={card.id} card={card} setCursorVariant={setCursorVariant} />
                        ))}
                    </div>
                    <div className={styles.body_item}>
                        {rightData.map((card) => (
                            <CardProject scroll={scroll} key={card.id} card={card} setCursorVariant={setCursorVariant} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockProjects;
