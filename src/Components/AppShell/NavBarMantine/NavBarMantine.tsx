import React from "react";
import {Navbar, Button, ScrollArea} from "@mantine/core";
import UserFooter from "./UserFooter/UserFooter";
import ButtonsForNav from "./ButtonsForNav.tsx/ButtonsForNav";
import {Clubs, School, Forms, Frame} from 'tabler-icons-react';

function NavBarMantine(props: any) {
    return (
        <Navbar
            p="md" hiddenBreakpoint={props.navbarBreakPoint} hidden={!props.opened}
            width={{sm: 250, md: 275, lg: 300, base: 240}}
            style={{background: "#ffffff"}}>
            <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs" mt="xs">{
                <>
                    <ButtonsForNav icon={<School/>} theme={props.theme} text={"University"}/>
                    <ButtonsForNav icon={<Clubs/>} theme={props.theme} text={"Clubs"}/>
                    <ButtonsForNav icon={<Forms/>} theme={props.theme} text={"Joined Clubs"}/>
                </>
            }
            </Navbar.Section>
            <Navbar.Section>{<UserFooter theme={props.theme}/>}</Navbar.Section>
        </Navbar>


    );
}

export default NavBarMantine;