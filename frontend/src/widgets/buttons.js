import React from 'react';
// import { Button } from 'react-bootstrap'
import rangSelect from '../getBackend'


const button = ({text}) => {
    return(
            <a className="waves-effect waves-teal btn-flat" onClick={(e) => rangSelect(e, text[0])}>{text}</a>
    )
}

export default button

