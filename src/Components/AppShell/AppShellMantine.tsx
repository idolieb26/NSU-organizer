import React, {useState} from 'react';

import {
    AppShell, MantineNumberSize,
    useMantineTheme,
} from '@mantine/core';
import NavBarMantine from "./NavBarMantine/NavBarMantine";
import Three3D from "../Three/three3D";


export default function AppShellMantine() {
    const theme = useMantineTheme();
    theme.colorScheme = "dark";
    theme.fontFamily = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"

    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            className="App"
            padding={0}
            styles={{main: {background: "#24292d"}}}

            fixed navbar={
                <NavBarMantine opened={opened} text={"Lazy to dev..."}/>
            }
        >
            <Three3D/>
        </AppShell>
    );
}