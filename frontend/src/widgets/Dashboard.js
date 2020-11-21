import React, { Component } from 'react';
import Widget1 from './widget_1'
import Widget2 from './widget_2'
import Widget3 from './widget_3'
import Widget4 from './widget_4'
import Widget5 from './widget_5'
import Widget6 from './widget_6'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'

class dashboard extends Component {
    render() {
        return (
            // <div className="dashboard container">
            //     <div class="row">
            //         <div class="col-lg-3 col-xl-12">
            //             <Widget1 />
            //         </div>
            //         <div class="col-xs-12 col-lg-4">
            //             <Widget2 />
            //         </div>
            //         <div class="col-lg-6 col-xl-8">
            //             <Widget3 />
            //         </div>
            //         <div class="col-xs-12">
            //             <Widget4 />
            //         </div>
            //         <div class="col-xs-12 col-lg-12 col-xl-8">
            //             <Widget5 />
            //         </div>
            //         <div class="col-xl-4">
            //             <Widget6 />
            //         </div>
            //     </div>
            // </div>
            <Container>
                <Row>
                    <Col lg-3 xl-12>
                        <Widget1 />
                    </Col>
                    <Col xs-12 lg-4>
                        <Widget2 />
                    </Col>
                    <Col lg-6 xl-8>
                        <Widget3 />
                    </Col>
                    <Col xs-12>
                        <Widget4 />
                    </Col>
                    <Col xs-12 lg-12 xl-8>
                        <Widget5 />
                    </Col>
                    <Col xl-4>
                        <Widget6 />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default dashboard
