import styles from "./styles/blockStack.module.css";

import html from "../../../../assets/images/stack/html.png";
import pug from "../../../../assets/images/stack/pug.png";
import css from "../../../../assets/images/stack/css.png";
import sass from "../../../../assets/images/stack/sass.png";
import javascript from "../../../../assets/images/stack/javascript.png";
import typescript from "../../../../assets/images/stack/typescript.png";
import react from "../../../../assets/images/stack/react.png";
import next from "../../../../assets/images/stack/next.png";
import redux from "../../../../assets/images/stack/redux.png";
import threejs from "../../../../assets/images/stack/threejs.png";
import webpack from "../../../../assets/images/stack/webpack.png";
import jest from "../../../../assets/images/stack/jest.png";
import reactTestLib from "../../../../assets/images/stack/react-test-lib.png";
import storybook from "../../../../assets/images/stack/storybook.png";
import loki from "../../../../assets/images/stack/loki.png";
import npm from "../../../../assets/images/stack/npm.png";
import yarn from "../../../../assets/images/stack/yarn.png";
import git from "../../../../assets/images/stack/git.png";
import bash from "../../../../assets/images/stack/bash.png";

import { GiTechnoHeart } from "react-icons/gi";

import CardStack from "../cardStack/CardStack";

const stack_array = [
    {
        id: 1,
        src: html,
        name: "HTML",
        description: `Уверенно верстаю большинство современных пользовательских интерфейсов. Стараюсь уделять внимание семантике, валидности, кроссбраузерности и адаптивности. Знаком с большинством современных подходов.`,
    },
    {
        id: 1,
        src: pug,
        name: "Pug",
        description: `Имею небольшой опыт работы с данной технологией, верстал несколько макетов. Многие команды предпочитают использовать ее как альтернативу HTML, и я не против поработать с ней.`,
    },
    {
        id: 2,
        src: css,
        name: "CSS",
        description: `Уверенно работаю со стилизацей. Хорошо знаком с модулями и методологией БЭМ. Уделяю большое внимание простоте, переиспользованию, адаптивности.`,
    },
    {
        id: 3,
        src: sass,
        name: "SASS",
        description: "Уверенно использую препроцессор, его вложенные селекторы, константы, наследование и т.д.",
    },
    {
        id: 3,
        src: javascript,
        name: "JavaScript",
        description: `Хорошо знаком с конструкциями языка, начиная от переменных и условий, заканчивая асинхронщиной и контекстами вызова.`,
    },
    {
        id: 4,
        src: typescript,
        name: "TypeScript",
        description: `Хорошо работаю с типами, интерфейсами, перечислениями и т.д. Отлично знаком с типами сторонних библиотек и неплохо использую их при написании npm пакетов, в первую очередь для автозаполнения.`,
    },
    {
        id: 5,
        src: react,
        name: "ReactJS",
        description: `Профессионально работаю с библиотекой, так как именно ради неё изначально изучил JavaScript. JSX, функциональные компоненты, классовые компоненты хуки, кастомные хуки, события, контексты, навигация, компоненты высшего порядка, условный рендеринг и многое другое находятся в моей компетенции.`,
    },
    {
        id: 6,
        src: next,
        name: "NextJS",
        description: `Хорошо работаю с фреймворком, знаком с базовыми правилами и конструкциями. Преимущественно использую для SEO оптимизации. `,
    },
    {
        id: 7,
        src: redux,
        name: "Redux",
        description: `Уверенно работаю с библиотекой: Store, actions, actionCreators, reducers, toolkit. Предпочитаю её вместо MobX из-за оптимизации.`,
    },
    {
        id: 8,
        src: threejs,
        name: "ThreeJS",
        description: "Знаком с основами работы над 3D графикой в веб-приложениях.",
    },
    {
        id: 9,
        src: webpack,
        name: "WebPack",
        description: `Хорошо работаю со сборщиком. Умею настраивать конфиг, html, JavaScript, TypeScript, React Router Dom, css, css modules, sass modules и т.д.`,
    },
    {
        id: 10,
        src: jest,
        name: "Jest",
        description: "Пишу тесты следующих видов: Unit тесты, интеграционные тесты, скриншотные тесты, e2e тесты.",
    },
    {
        id: 11,
        src: reactTestLib,
        name: "React Testing Library",
        description: "Пишу тесты следующих видов: Unit тесты, интеграционные тесты, скриншотные тесты, e2e тесты.",
    },
    {
        id: 12,
        src: storybook,
        name: "Storybook",
        description: "Неплохо использую для документирования дизайн систем и UI китов.",
    },
    {
        id: 13,
        src: loki,
        name: "Loki",
        description: "Неплохо использую для скриншотного тестирования.",
    },
    {
        id: 14,
        src: npm,
        name: "NPM",
        description:
            "Уверенно работаю с менеджером пакетов. Подключение и отключение зависимостей, публикация npm пакетов, работа с версиями.",
    },
    {
        id: 15,
        src: yarn,
        name: "Yarn",
        description: "Использую как и npm, просто побыстрее работает.",
    },
    {
        id: 16,
        src: git,
        name: "Git",
        description: "Всех тонкостей не знаю. Умею работать с ветками, версиями, milestone, issue, релизами.",
    },
    {
        id: 17,
        src: bash,
        name: "Bash",
        description: "90% моего опыта разработки приходится на Ubuntu, часто работаю с терминалом и с серверами через ssh.",
    },
];

const BlockStack = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                <GiTechnoHeart />
                Стэк технологий
            </h3>
            <div className={styles.body}>
                {stack_array.map((stack) => (
                    <CardStack stack={stack} />
                ))}
            </div>
        </div>
    );
};

export default BlockStack;
