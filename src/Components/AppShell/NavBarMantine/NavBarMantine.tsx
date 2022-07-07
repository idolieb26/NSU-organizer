import React from "react";
import {Navbar, Button, ScrollArea} from "@mantine/core";


function NavBarMantine(props: any) {
    return (
        <Navbar
            p="md" hiddenBreakpoint={props.navbarBreakPoint} hidden={!props.opened}
            width={{sm: 275, md: 300, lg: 375, base: 250}}
            style={{background: "#2f363e"}}>
            <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs" mt="xs">{

            }
            </Navbar.Section>
        </Navbar>


    );
}

export default NavBarMantine;