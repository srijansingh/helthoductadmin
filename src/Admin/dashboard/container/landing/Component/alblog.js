import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";
import CardHeader from '@material-ui/core/CardHeader';


const styles = theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    }
  });


class Allblog extends Component {
  constructor(){
    super();
    this.state = {
      blogpost : true
    }
  }

  handleDelete = (id) => {
    axios.delete('https://server.techronx.com/blog/' + id)
    .then(response => {
      this.setState({
        blogpost:false
      })
      alert("Post Deleted Successfully")
    })
    .catch(err => {
     
      alert("Something went wrong")
    })
  }

    render() {
        const {classes} = this.props;

        return (
           
                <Grid item key={this.props.key} xs={12} sm={6} md={4}>
                  {
                    this.state.blogpost 
                     ?
                  
                  <Card className={classes.card}>
                  <CardHeader
                      title={this.props.title+"..."}
                      subheader={this.props.category}
                    />
                    <CardMedia
                      className={classes.cardMedia}
                      image={this.props.image}
                      title={this.props.title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      {this.props.title}
                      </Typography>
                      <Typography>
                       {this.props.content}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button href={"/blog/" + this.props.id} size="small" variant="contained" color="primary">
                        View
                      </Button>
                     
                      <Button  size="small" color="secondary" variant="contained" onClick={() =>{if(window.confirm('Delete the item?')) {this.handleDelete(this.props.id)};}}>
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                  :
                  null
                  }
                </Grid>
          
        )
    }
}

export default withStyles(styles, { withTheme: true })(Allblog);