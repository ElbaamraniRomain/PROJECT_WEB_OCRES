import React, { Component } from 'react';
import { Button } from 'antd';


const button = ({text}) => {
    return(
            <Button type="primary">{text}</Button>
    )
}

export default button