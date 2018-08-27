import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import './Sidebar.css';
import { Backup, Bookmarks, DesktopMac, PhonelinkRing } from '@material-ui/icons';


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        fontSize: 20,
    },
    icon: {
        fontSize: 24,
    },
});

function SwipeDrawer(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <h5>Insert a link to any web page, article,image or video or drop file here </h5>
                <ListItem button>
                    <TextField
                        id="full-width"
                        label="Link"
                        placeholder="Link"
                        margin="normal"
                        type="text"
                        fullWidth
                    />
                </ListItem>

                <div> Or </div>
                <ListItem button>
                    <ListItemText primary="Upload Image" />
                    <Backup className={classes.icon} />
                </ListItem>
            </List>
            <Divider />
            <ListItem button>
                <ListItemText primary="Import Bookmarks" />
                <Bookmarks className={classes.icon} />
            </ListItem>
            <Divider />
            <div> Install</div>
            <ListItem button>
                <ListItemText primary="Browser Extension" />
                <DesktopMac className={classes.icon} />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Mobile App" />
                <PhonelinkRing className={classes.icon} />
            </ListItem>
            <Divider />
        </div>
    );
}

SwipeDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeDrawer);