import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from "../../Component/appbar";
import Allblog from "./Component/alblog";
import Main from "./Component/main";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
});

class Landing extends Component {
    constructor(){
        super();
        this.state={
            posts : [],

        }
    }
    
   
    componentDidMount(){
        axios.get('https://server.techronx.com/getblog')
        .then(response => {
            this.setState({
                posts: response.data
            });
        })
        .catch(err=> {
            alert("Something went wrong")
        });
    }


   




    render() {
        const {classes} = this.props;
        const blog = this.state.posts.map((blog,index)=>{
            return <Allblog key={index}   title={blog.title.substring(0, 30)}  image={blog.image} content={blog.content.substring(0, 100)} id={blog.postid} reads={blog.reads} category={blog.category}/> 
        })
        return (
            <React.Fragment>
                <CssBaseline />
                <Appbar />
                <main>
                <Main />
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
               
                        {blog}
                   
                    </Grid>
                </Container>
                </main>
            </React.Fragment>

        )
    }
}

export default withStyles(styles, { withTheme: true })(Landing)