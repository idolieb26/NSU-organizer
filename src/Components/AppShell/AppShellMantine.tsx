import React, {useState} from 'react';

import {
    AppShell, MantineNumberSize,
    useMantineTheme,
} from '@mantine/core';
import NavBarMantine from "./NavBarMantine/NavBarMantine";
import Three from "../Three/Three";


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
            navbarOffsetBreakpoint={breakpoint}
            fixed navbar={
                <NavBarMantine breakpoint={breakpoint} opened={opened} text={"Lazy to dev..."}/>
            }
        >
            <Three/>
        </AppShell>
    );
}