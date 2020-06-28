import React, { Component } from 'react'
import SingleBlog from './component/singleBlog';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from "../../Component/appbar";
import "./blogging.css";

 


export default class Blogging extends Component {
    constructor(){
        super();
        this.state={
            
            title:null,
            content:null,
            image:null,
            reads:null,
            category:null,
            loading:false

        }
    }

    componentDidMount(){
        fetch('https://server.techronx.com/blog/'+this.props.match.params.postid, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(result => {
            result.json().then(response => {
                this.setState({
                    image:response[0].image,
                    category:response[0].category,
                    title:response[0].title,
                    content:response[0].content,
                    reads:response[0].reads,
                    loading: false
                })
               
                
            })
        }).catch(err => {
           alert("Something went wrong")
            this.setState({
                loading: false,
                error: err
            });
        })
    }

    render() {

       
        return (
            <React.Fragment>
                <CssBaseline />
                <Appbar />
                <main className="singleBlog">
                  
                <SingleBlog 
                        category={this.state.category}
                        title={this.state.title} 
                        content={this.state.content}
                        image={this.state.image}
                        reads={this.state.reads}
                    /> 
                </main>
            </React.Fragment>  

        )
    }
}
