import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = theme => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
  });

class Main extends Component {
    render() {

        const {classes} = this.props;
        
        return (
            <div className={classes.heroContent}>
            <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Start Blogging Now
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
            </Typography>
            <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                      <Button href="/create" variant="contained" color="primary" >
                          Create Blog
                      </Button>
                  </Grid>
                </Grid>
            </div>
            </Container>
          </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Main);