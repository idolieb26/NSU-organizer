import React from "react";
import {Navbar, Button, ScrollArea} from "@mantine/core";

function NavBarMantine(props: any) {
    return (
        <Navbar p="md" width={{
            base: 50,
        }} style={{background: "#2f363e"}} >
            <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs" mt="xs">{

            }
            </Navbar.Section>
        </Navbar>
    );
}

export default NavBarMantine;