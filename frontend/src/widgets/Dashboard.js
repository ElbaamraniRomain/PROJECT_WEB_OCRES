import React, { Component } from 'react';
import Widget1 from './widget_1'
import Widget2 from './widget_2'
import Widget3 from './widget_3'
import Widget4 from './widget_4'
import Widget5 from './widget_5'
import Widget6 from './widget_6'
import Buttons from './buttons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'

class dashboard extends Component {
    render() {
        return (
            <Container>
                <Row lg={6}>
                    <Buttons text="day" />
                    <Buttons text="week" />
                    <Buttons text="month" />
                </Row>
                <Row>
                    <Col lg={3}>
                        <Widget1 />
                    </Col>
                    <Col lg={9}>
                        <Widget2 />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Widget3 />
                    </Col>
                    <Col lg={6}>
                        <Widget4 />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Widget5 />
                    </Col>
                    <Col lg={6}>
                        <Widget6 />
                    </Col>
                </Row>
            </Container>
            // // <Container>
            // //     <Row lg={6}>
            // //         <Buttons text="day" />
            // //         <Buttons text="week" />
            // //         <Buttons text="month" />
            // //     </Row>

            //     <Row>
            //         <Col xl={3} md={4} sm={12}>
            //             <Widget1 />
            //         </Col>

            //         <Col xl={9} md={8} sm={12}>
            //             <Widget2 />
            //         </Col>
            //     </Row>
            //     <Row>

            //         <Col xl={6} md={8} sm={12}>
            //             <Widget3 />
            //         </Col>

            //         <Col xl={6} md={8} sm={12}>
            //             <Widget4 />
            //         </Col>

            //         <Col xl={6} md={8} sm={12}>
            //             <Widget5 />
            //         </Col>

            //         <Col xl={6} md={8} sm={12}>
            //             <Widget6 />
            //         </Col>
            //     </Row>
            // </Container>
        )
    }
}

export default dashboard
