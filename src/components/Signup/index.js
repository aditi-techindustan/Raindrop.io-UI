import React, { Component } from "react";
import { Row, Col, Grid, Image, Button} from 'react-bootstrap';
import raindrop from '../img/raindrop.jpg';
import '../Sidebar/Sidebar.css';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const wellStyles = { maxWidth: 400, margin: '3 auto 10px' };
class Signup extends Component {
    render() {
        return (
            <div>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={raindrop} height={100} width={100} className="center fix" />
                            <div className="SizE">Start Collecting!</div>
                            <TextField
                                id="full-width"
                                label="Your Name"
                                placeholder="Your Name"
                                margin="normal"
                                type="text"
                                fullWidth
                            />
                            <TextField
                                id="full-width"
                                label="Email"
                                placeholder="Email"
                                margin="normal"
                                type="password"
                                fullWidth
                            />
                            <TextField
                                id="full-width"
                                label="Password"
                                placeholder="Password"
                                margin="normal"
                                type="password"
                                fullWidth
                            />
                            <div className="top" style={wellStyles}>
                                <Button bsSize="large" bsStyle="primary" block>
                                    Sign Up
                            </Button>
                                <div className="top"> By clicking on 'SignUp' above , you are agreeing to the Terms</div>
                                <div className="margin">  Of Service and Privacy Policy. </div>
                            </div>

                        </Col>
                        <Col xsHidden md={4}>
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Paper className="position">
                        <span className="CenterAlign">
                            <Link to="/resetpassword">Reset Password </Link>
                        </span>
                        <span className="align"> <Link to="/login"> Log In </Link> </span>
                        <span className="align"> Help </span>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export default Signup;