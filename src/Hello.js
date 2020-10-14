import React, {
    Component
} from 'react';

import './Hello.css';

const Hello = (props) => {

    return ( < div className = "f2 tc bg-light-grey" > <
        h1 > Hello world < /h1>

        <
        p > {
            props.greetings
        } < /p>

        <
        /
        div >

    );

}

export default Hello;