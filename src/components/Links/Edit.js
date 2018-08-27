import React, { Component } from "react";
import { Grid, Row, Col, Well, Tooltip } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import '../Sidebar/Sidebar.css';
import bitcoin from '../img/bitcoin.jpg'
import App from '../App';

const tooltip = (
    <Tooltip id="tooltip">
        <h3>Full Screen</h3>
    </Tooltip>
);

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            back: false
        }
    }

    backToApp = () => {
        this.setState({
            back: true
        });
    }


    render() {
        return (
            <Grid fluid>
                <Row className="show-grid borderLeft fixed">
                    <Col xs={6} md={4}>
                        <Well className="TopAppbar">
                            <span className="pointer">
                                <i className="fa fa-arrow-left" onClick={this.props.onEdit}>
                                </i>
                            </span>
                            <span className="MargiN pointer">
                                <i className="fa fa-arrows"></i>
                            </span>
                            <span className="SpacE pointer">Article</span>
                            <span className="MargiN pointer">Edit</span>
                            <span className="MargiN pointer">Dribble</span>
                            <span className="SpacE lg pointer">
                                <i className="fa fa-arrow-circle-up"></i>
                            </span>
                            <span className="MargiN pointer">
                                <i className="fa fa-heart"></i>
                            </span>
                            <span className="MargiN pointer">
                                <i className="fa fa-trash"></i>
                            </span>
                        </Well>
                        <div className="size">
                            <Well className="TopApp div">
                                <span className="MargiN"><i className="fa fa-tag"></i></span>
                                <span><input type="text" placeholder="Add Tag..." className="inputfield" /></span>
                            </Well>
                            <span className="title"> Title</span>
                            <h4 className="head">Beginner's guide to BlockChain-Explaining   it to a five year Old...</h4>

                            <span className="title"> Description</span>
                            <h5 className="head">A Simple Guide To Understand BlockChain With A Real World Analogy</h5>
                            <img src={bitcoin} height={250} width={389} />
                            <span className="title"> Advice</span>
                            <h5 className="head">Drag and Drop your bookmarks between Collections.</h5>
                            <h5 className="head">Right mouse click on bookmarks or collections for more actions.</h5>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Edit;