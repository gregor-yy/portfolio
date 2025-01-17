import ScrollContainer from "./components/UI/scrollContainer/ScrollContainer";

import Hello from "./components/blocks/hello/Hello";
import Text from "./components/blocks/about/text/Text";
import BlockProjects from "./components/blocks/projects/blockProjects/BlockProjects";
import LineText from "./components/blocks/lineText/LineText";
import Grid from "./components/blocks/grid/Grid";
import BlockStack from "./components/blocks/stack/blockStack/BlockStack";
import Contact from "./components/blocks/contact/Contact";

import Cursor from "./components/UI/cursor/Cursor";

import { useState } from "react";
// TODO: Все изображения перевести в webp и привести к единому размеру
// TODO: Настроить абсолютные import-ы
// TODO: Добавить TypeScript
// TODO: Поработать над файловой структурой, есть смысл передалать под FSD
// TODO: Развернуть Strapi и вынести туда все данные
// TODO: Поработать над варнингами
function App() {
    const [cursorVariant, setCursorVariant] = useState("default");
    const [scroll, setScroll] = useState();
    return (
        <>
            <ScrollContainer setScroll={setScroll}>
                <Hello setCursorVariant={setCursorVariant} />
                <Text scroll={scroll} />
                <BlockProjects scroll={scroll} setCursorVariant={setCursorVariant} />
                <Contact setCursorVariant={setCursorVariant} />
                <LineText scroll={scroll} />
                <Grid scroll={scroll} />
                <BlockStack />
                <div style={{ height: "100vh" }}></div>
            </ScrollContainer>
            <Cursor cursorVariant={cursorVariant} />
        </>
    );
}

export default App;
