import React from "react";
import {Navbar, Button, ScrollArea} from "@mantine/core";
import UserFooter from "./UserFooter/UserFooter";
import ButtonsForNav from "./ButtonsForNav.tsx/ButtonsForNav";


function NavBarMantine(props: any) {
    return (
        <Navbar
            p="md" hiddenBreakpoint={props.navbarBreakPoint} hidden={!props.opened}
            width={{sm: 250, md: 275, lg: 300, base: 240}}
            style={{background: "#ffffff"}}>
            <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs" mt="xs">{
                <>
                    <ButtonsForNav text={"University"}/>
                    <ButtonsForNav text={"Clubs"}/>
                </>
            }
            </Navbar.Section>
            <Navbar.Section>{<UserFooter/>}</Navbar.Section>
        </Navbar>


    );
}

export default NavBarMantine;