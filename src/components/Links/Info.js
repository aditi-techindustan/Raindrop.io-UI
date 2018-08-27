import React, { Component } from 'react';
import { Media, Tooltip } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Edit from './Edit';
import WithEdit from '../WithEdit';
import App from '../App';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial: false,
            show: false
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.checked
        });
    };

    showCheck = () => {
        this.props.onEdit();
    }

    render() {
        const { initial } = this.state;
        return (
            <Media className="static ellipsis ">
                <Media.Left>
                    <img src={this.props.img} height={50} width={50} className="Adjust" />
                </Media.Left>
                <Media.Body>
                    <Media.Heading>
                        {this.props.heading}
                        <div className="web">
                            <h5>{this.props.link}</h5>
                        </div>
                        {!this.props.edit ?
                            <div className="hoverContent">
                                <i className=" fontSize fa fa-share-square-o ">
                                </i>
                                <div className="edit" onClick={this.props.onEdit}>Edit
                                </div>
                                <div className="check">
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={initial}
                                                onChange={this.handleChange('initial')}
                                                value="initial" />
                                        }
                                    />
                                </div>
                            </div>
                            :
                            <div className="static">
                                <div className="checkNew " >
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={initial}
                                                onChange={this.handleChange('initial')}
                                                value="initial" />
                                        }
                                    />
                                </div>
                            </div>
                        }
                    </Media.Heading>
                    <p className="set ellipses" >{this.props.content}</p>
                </Media.Body>
            </Media>
        );
    }
}
export default Info;