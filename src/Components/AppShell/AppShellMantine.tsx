import React, {useState} from 'react';
import {
    AppShell, ColorSchemeProvider,
    Footer,
    Text,
    useMantineTheme,
} from '@mantine/core';
import NavBarMantine from "./NavBarMantine/NavBarMantine";
import AsideMantine from "./AsideMantine/AsideMantine";
import HeaderMantine from "./HeaderMantine/HeaderMantine";
import FooterMantine from "./FooterMantine/FooterMantine";

export default function AppShellMantine() {
    const theme = useMantineTheme();
    theme.colorScheme="dark";
    theme.fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"
    const [opened, setOpened] = useState(false);
    return (
        <AppShell className="App" styles={{
            main: {
                background: "#24292d"
            },
        }}
                  navbarOffsetBreakpoint="sm"
                  asideOffsetBreakpoint="sm"
                  fixed
                  header={
                      <HeaderMantine opened={opened} setOpened={setOpened} theme={theme} height={70} text={"You and I"}
                                     imgSrc={require("./logo192.png")}/>
                  }
                  navbar={
                      <NavBarMantine opened={opened} text={"Lazy to dev..."} />
                  }

        >
            <Text color={"white"}>Working on it</Text>
        </AppShell>
    );
}