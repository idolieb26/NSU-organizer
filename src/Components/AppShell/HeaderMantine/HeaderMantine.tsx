import React from "react";
import {Burger, Header, MediaQuery, Text} from "@mantine/core";

function HeaderMantine(props: any) {
    return (
        <Header height={props.height} p="md">
            <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                <MediaQuery largerThan="sm" styles={{display: 'none'}}>
                    <Burger
                        opened={props.opened}
                        onClick={() => props.setOpened((o: any) => !o)}
                        size="sm"
                        color={props.theme.colors.gray[0]}
                        mr="xl"
                    />
                </MediaQuery>
                <img style={{padding:20}} src={props.imgSrc} height={props.height/1.2} alt={"Uni_logo"}/>
                <Text color={"white"}>{props.text}</Text>
            </div>
        </Header>
    )
}

export default HeaderMantine;