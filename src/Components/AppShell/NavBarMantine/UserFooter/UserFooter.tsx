import React from 'react';
import {Image, Text} from "@mantine/core";

function UserFooter(props: any) {
    return (
        <div className={"UserFooter"}>
            <Text weight={400}>Md. Ishtiaq Ahamed Fahim 2012518642</Text>
            <Text weight={200} variant={'link'}>ishtiaq.fahim@northsouth.edu</Text>
        </div>
    );
}

export default UserFooter;