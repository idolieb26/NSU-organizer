import React from "react";
import {Navbar, Button, ScrollArea} from "@mantine/core";

function NavBarMantine(props: any) {
    return (
        <Navbar p="xs" width={{base: 300}} style={{background: "#2f363e"}}>
            <Navbar.Section mt="xs">{/* Header with logo */}</Navbar.Section>
            <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
                {

                    <Button variant="gradient" gradient={{ from: '#057760', to: '#09735f', deg: 105 }}>Hi</Button>
                }
            </Navbar.Section>

            <Navbar.Section>{/* Footer with user */}</Navbar.Section>
        </Navbar>
    );
}

export default NavBarMantine;