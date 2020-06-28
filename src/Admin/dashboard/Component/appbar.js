import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import { withStyles } from '@material-ui/core/styles';
import fireauth from "../../auth/firebase";

const styles = theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
  });

class Appbar extends Component {

    logout =() => {
        fireauth.auth().signOut();
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" >
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} href="/" color="inherit" aria-label="menu">
                       <HomeWorkIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Healthoduct
                    </Typography>
                    <Button color="inherit" onClick={this.logout}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Appbar);