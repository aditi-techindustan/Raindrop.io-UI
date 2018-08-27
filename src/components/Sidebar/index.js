import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button, Well, Modal } from 'react-bootstrap';
import './Sidebar.css';
import 'font-awesome/css/font-awesome.min.css';
import SwipeDrawer from './SwipeDrawer';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Favorite, Settings, CloudDownload } from '@material-ui/icons';
import { Bookmarks } from '@material-ui/icons';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: false,
            show: false
        }
    }
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };


    handleClose = () => {
        this.setState({
            show: false
        });
    }


    handleShow = () => {
        this.setState({
            show: true
        });
    }

    onClick = () => {
        this.setState({
            result: true,
        });
    }

    render() {
        return (
            <div>

                <ListGroup className="line">
                    <ListGroupItem className="border heading">
                        RAINDROP.IO
                        <Button bsSize="small"
                            className="right"
                            onClick={this.handleShow}
                        >
                            +
                        </Button>
                        <Modal bsSize="small" show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton> <Bookmarks /> Add Bookmark </Modal.Header>
                            <Modal.Body>
                                <SwipeDrawer />
                            </Modal.Body>
                        </Modal>
                        {this.state.result ? <SwipeDrawer /> : null}
                    </ListGroupItem>
                    <ListGroupItem className="border">
                        <i class="fa fa-cloud" aria-hidden="true"></i>
                        <span> </span> All BookMarks
                    <span className="rightEnd"> 148</span>
                    </ListGroupItem>
                    <ListGroupItem className="border">
                        <i class="fa fa-spinner" aria-hidden="true"></i>
                        <span> </span>Unsorted
                    <span className="rightEnd"> 88</span>
                    </ListGroupItem>
                    <Well bsSize="small" className="smallHeaders">
                        My Collections
                </Well>
                    <ListGroupItem className="border">
                        <i class="fa fa-video-camera" aria-hidden="true"></i>
                        <span> </span>
                        Videos
                </ListGroupItem>
                    <ListGroupItem className="border">
                        <i className="fa fa-chrome" aria-hidden="true"></i>
                        <span> </span>
                        Bookmarks Bar
                    <span className="rightEnd"> 160</span>
                    </ListGroupItem>
                    <Well bsSize="small" className="smallHeaders">
                        Maintainence
                </Well>
                    <ListGroupItem className="border">
                        <i className="fa fa-files-o" aria-hidden="true"></i>
                        <span> </span>
                        Duplicates
                </ListGroupItem>
                    <ListGroupItem className="border">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <span> </span>
                        Broken Links
                </ListGroupItem>
                    <ListGroupItem className="border">
                        <i className="fa fa-tags" aria-hidden="true"></i>
                        <span> </span>
                        Tags
                </ListGroupItem>
                    <ListGroupItem className="border">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        <span> </span>
                        Trash
                </ListGroupItem>
                    <ListGroupItem className="border">

                    </ListGroupItem>
                    <ListGroupItem className="border">

                    </ListGroupItem>
                    <ListGroupItem className="border">

                    </ListGroupItem>
                    <ListGroupItem className="border">

                    </ListGroupItem>
                    <ListGroupItem className="border">

                    </ListGroupItem>
                    <ListGroupItem className="border">

                    </ListGroupItem>
                    <ListGroupItem className="border">

                    </ListGroupItem>
                    <ListGroupItem className="border ">

                        <i class="fa fa-folder" aria-hidden="true"></i>
                        <span> </span>
                        <input type="text" placeholder="New Collection..." className="inputfield" />
                    </ListGroupItem>
                    <ListGroupItem className="border">

                    </ListGroupItem>

                    <BottomNavigation className="fixed">
                        <BottomNavigationAction icon={<Favorite />} />
                        <BottomNavigationAction icon={<CloudDownload />} />
                        <BottomNavigationAction icon={<Settings />} />
                    </BottomNavigation>
                </ListGroup>
            </div>
        );
    }
}

export default Sidebar;