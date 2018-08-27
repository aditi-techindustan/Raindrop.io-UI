import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import Sidebar from './Sidebar/';
import Topbar from './Topbar/';
import Edit from './Links/Edit.js';

class WithEdit extends Component{
    render(){
        return(
<Grid fluid className="EditContent">
            <Row className="show-grid">
                <Col xs={12} md={3} sm={3}>
                    <Sidebar />
                </Col>
                <Col xs={12} md={4} sm={4}>
                    <Topbar />
                </Col>
                <Col xs={12} md={5} sm={5}>
                    <Edit />
                </Col>
            </Row>
        </Grid>
        );
    }
}

export default WithEdit;