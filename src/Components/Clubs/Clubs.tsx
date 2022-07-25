import React from 'react';
import {Autocomplete, Button, Paper} from "@mantine/core";
import {incrementNavigationProgress, NavigationProgress} from "@mantine/nprogress";

const Clubs = () => {
    return (
        <>

        <Autocomplete
            label="Your favorite framework/library"
            placeholder="Pick one"
            data={['React', 'Angular', 'Svelte', 'Vue']}
        />
            <Button onClick={() => incrementNavigationProgress(10)}>Add 10%</Button>
        </>
    );
};

export default Clubs;
