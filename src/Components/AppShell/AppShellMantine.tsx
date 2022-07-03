import React, {useState} from 'react';
import {
    AppShell, Button, MantineNumberSize,
    Text,
    useMantineTheme,
} from '@mantine/core';
import NavBarMantine from "./NavBarMantine/NavBarMantine";
import HeaderMantine from "./HeaderMantine/HeaderMantine";

export default function AppShellMantine() {
    const theme = useMantineTheme();
    theme.colorScheme = "dark";
    theme.fontFamily = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"

    const breakpoint: MantineNumberSize = "sm";

    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            className="App"
            padding={0}
            styles={{main: {background: "#24292d"}}}
            navbarOffsetBreakpoint={breakpoint} fixed
            header={
                <HeaderMantine opened={opened} setOpened={setOpened} theme={theme} height={62} text={"You and I"}
                               imgSrc={require("./logo192.png")}/>
            }
            navbar={
                <NavBarMantine breakpoint={breakpoint} opened={opened} text={"Lazy to dev..."}/>
            }
        >
            <Button color={"white"}>Working on it</Button>
            <Button color={"white"}>Working on it</Button>
            <Button color={"white"}>Working on it</Button>
        </AppShell>
    );
}