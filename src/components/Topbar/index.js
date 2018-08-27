import React, { Component } from "react";
import { FormControl, Glyphicon, ButtonToolbar, DropdownButton, MenuItem, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import '../Sidebar/Sidebar.css';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Links from '../Links/';

const Item = styled.section`
display:inline-block;
margin-left:10px;
padding:0px;
`;

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedB: true,
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return (
            <div>
                <InputGroup>
                    <FormControl type="text" placeholder="All Bookmarks"
                        className="style" />
                    <InputGroup.Addon className="list">
                        <ButtonToolbar>
                            <DropdownButton
                                bsSize="small"
                                className="list style"
                                title="List"
                                button id="dropdown-size-small"
                                pullRight id="button-pull-right"
                                noCaret
                            >
                                <MenuItem>
                                    <Glyphicon glyph="list" className="style" />
                                    <span> List </span>
                                </MenuItem>
                                <MenuItem>
                                    <Glyphicon glyph="align-justify" className="style" />
                                    <span> Headlines</span>
                                </MenuItem>
                                <MenuItem>
                                    <Glyphicon glyph="th-large" className="style" />
                                    <span> Cards</span>
                                </MenuItem>
                                <MenuItem>
                                    <Glyphicon glyph="th" className="style" />
                                    <span> MoodBoard</span>
                                </MenuItem>

                                <MenuItem divider />
                                <br />
                                <span className="spacing"> Show</span>
                                <MenuItem>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={this.state.checkedB}
                                                onChange={this.handleChange('checkedB')}
                                                value="checkedB"
                                            // color="primary"
                                            />
                                        }
                                    />
                                    <span>Cover</span>
                                </MenuItem>
                                <MenuItem divider />
                                <span>  </span>
                                <div className="slidecontainer">
                                    <input type="range" min="1" max="100" value="50" id="myRange"></input>
                                </div>
                                <span></span>
                                <div checked data-toggle="toggle" data-style="ios"></div>
                                <br />
                                <MenuItem>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={this.state.checkedB}
                                                onChange={this.handleChange('checkedB')}
                                                value="checkedB"
                                            />
                                        }
                                    />

                                    <span> Description</span>
                                </MenuItem>
                                <MenuItem divider />
                                <br />
                                <span className="spacing">Optional</span>
                                <MenuItem>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={this.state.checkedB}
                                                onChange={this.handleChange('checkedB')}
                                                value="checkedB"
                                            />
                                        }
                                    />
                                    <span> Apply to All</span>
                                </MenuItem>
                            </DropdownButton>
                        </ButtonToolbar>
                    </InputGroup.Addon>
                </InputGroup>

                <ButtonToolbar className="style">
                    <Item>
                        <DropdownButton bsSize="small"
                            title="By Date"
                            button id="dropdown-size-small"
                            className="Drop"
                        >
                            <MenuItem>By Name</MenuItem>
                            <MenuItem>By Popularity</MenuItem>
                            <MenuItem>Sites</MenuItem>
                        </DropdownButton>
                    </Item>
                </ButtonToolbar>
                <br />
                <p>August</p>
                <Links onEdit={this.props.onEdit} edit={this.props.edit}/>
            </div>
        );
    }
}

export default Topbar;