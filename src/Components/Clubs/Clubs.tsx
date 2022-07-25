import React from 'react';
import {Autocomplete, Paper} from "@mantine/core";

const Clubs = () => {
    return (
        <Autocomplete
            label="Your favorite framework/library"
            placeholder="Pick one"
            data={['React', 'Angular', 'Svelte', 'Vue']}
        />
    );
};

export default Clubs;
