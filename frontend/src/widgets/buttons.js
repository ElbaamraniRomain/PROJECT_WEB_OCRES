import React from 'react';
import { Button } from 'react-bootstrap'


const button = ({text}) => {
    return(
            <Button className = "waves-effect waves-teal btn-flat ">{text}</Button>
    )
}

export default button

