import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import { Typography} from 'antd';
import firebase from "../../../../auth/firebase";
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const { Title } = Typography;

class Blog extends Component {

    constructor(){
        super();
        this.state={
           
            files:[],
            userid:'srijan.singh.45',
            title:null,
            content : "",
            image:null,
            thumnblink:null,
            keyword:null,
            category:null,
            reads:null,
            thumbSelected:false,
            loading:false
        }
    }

    
    onEditorChange = (value) => {
        this.setState({
            content:value
        })
        console.log(this.state.content)
    }

    onFilesChange = (files) => {
        // setFiles(files)
        this.setState({
            files : files
        })
    }

    fileChangeHandler = (event) => {
        console.log(event.target.files[0]);
        this.setState({
            thumblink: URL.createObjectURL(event.target.files[0]),
            thumbSelected : true
        })
    }



    firebaseupload=async()=>{
        this.setState({loading : true})
        const response = await fetch(this.state.thumblink)
        const blob = await response.blob()
        var ref = firebase.storage().ref().child('thumbnail/' + this.state.thumblink)
        return ref.put(blob)
        .then(()=>{
            ref.getDownloadURL().then((url)=>{
              
                this.setState({
                    image : url
                })
                fetch('https://server.techronx.com/postblog', {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.state)
                }).then(result => {
                    result.json().then(response => {
                       
                        this.setState({
                            loading: false
                        })
                        alert('Post Added Successfully')
                       
                    })
                }).catch(err => {
                    alert("Something went wrong")
                    this.setState({
                        loading: false,
                        error: err
                    });
                });  
            })
        })
    }



    render(){
        return (
            <div style={{ maxWidth: '900px', width:'85%', margin: '2rem auto',display:'grid', gridTemplateColumns:'repeat(1,1fr)', gridGap:'1.5rem' }}>
                
                <div style={{ textAlign: 'center' }}>
                    <Title level={2} > Editor</Title>
                </div>
               
                <TextField id="outlined-basic" label="Enter heading or title" variant="outlined" onChange={(event)=>{this.setState({title:event.target.value})}} />
                <TextField id="outlined-basic" label="Read time" variant="outlined" onChange={(event)=>{this.setState({reads:event.target.value})}} />
               
                <FormControl variant="outlined" >
                    <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                    <Select
                        native
                        value={this.state.category}
                        onChange={(event)=>{this.setState({category:event.target.value})}}
                        label="Category"
                        inputProps={{
                            name: 'category',
                            id: 'outlined-age-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value="natural">Natural</option>
                        <option value="yoga">Yoga</option>
                        <option value="health">Health</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="recipes">Recipes</option>
                    </Select>
                </FormControl>
               

                <input type="file" style={{display:'none'}} onChange={this.fileChangeHandler} ref={chooseFile => this.chooseFile = chooseFile} accept="image/*"/>

                {
                    this.state.thumbSelected ?
                    <img src={this.state.thumblink} style={{maxHeight:'400px', width:'100%', border:'1px solid #ccc', borderRadius:'10px', margin:'1rem 0'}} />
                    :
                <Button variant="outlined" color="primary" style={{height:'100px'}} size="large" onClick={() => this.chooseFile.click()} startIcon={<CloudUploadIcon />}>
                    Upload Thumbnail Image
                </Button>
                 }

                <TextareaAutosize
                    rowsMin={4}
                    aria-label="maximum height"
                    placeholder="Start your blog here"
                    onChange={(event)=>{this.setState({content:event.target.value})}}
                    style={{maxWidth:'900px',width:'100%',}}
                />
                

                <Button
                    size="large"
                    htmlType="submit"
                    variant="contained"
                    color="primary"
                    style={{margin:"1rem 0"}}
                    onClick={this.firebaseupload}
                >
                    {
                        this.state.loading ? <Dots color="white" /> : 'Submit'
                    }
                </Button>
                  
               
            </div>
        )
    }
    
} 

export default Blog;