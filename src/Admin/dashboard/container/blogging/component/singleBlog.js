import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CardMedia from '@material-ui/core/CardMedia';


const  styles = theme => ({
  root: {
    maxWidth:'800px',
    width:'90%'
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },

  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class SingleBlog extends Component{

    render(){

        const {classes} = this.props;

        return (
            <Card className={classes.root}>
              <CardHeader
                
               
                title={this.props.title}
                subheader={this.props.reads + " mins"}
              />
              <CardMedia
                      className={classes.cardMedia}
                      image={this.props.image}
                      title={this.props.title}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                </CardContent>
              <CardContent>
                <Typography>
                   {this.props.content}
                </Typography>
              </CardContent>
              
            </Card>
          );
    }
} 

export default withStyles(styles, { withTheme: true })(SingleBlog);
  