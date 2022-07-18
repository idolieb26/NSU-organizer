import React from 'react';
import {Button} from "@mantine/core";

function ButtonsForNav(props: any) {
    return (
        <Button fullWidth={true} variant={"light"}>{props.text}</Button>
    );
}

export default ButtonsForNav;