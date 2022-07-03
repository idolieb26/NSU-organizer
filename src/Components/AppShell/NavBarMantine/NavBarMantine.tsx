import React from "react";
import {Navbar, Button, ScrollArea} from "@mantine/core";

function NavBarMantine(props: any) {
    return (
        <Navbar p="md" hiddenBreakpoint={props.breakpoint} width={{
            xs: 200,
            lg: 325,
            base: 325,
        }} style={{background: "#2f363e"}} hidden={!props.opened}>
            <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs" mt="xs">{
                <div style={{display:"flex", flexDirection:"column", gap: 12}}>
                <Button variant="gradient" gradient={{from: '#057760', to: '#09735f', deg: 105}}>Hi</Button>
                <Button variant="gradient" gradient={{from: '#057760', to: '#09735f', deg: 105}}>Hi</Button>
                </div>
            }
            </Navbar.Section>
        </Navbar>
    );
}

export default NavBarMantine;