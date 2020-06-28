import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from "../../Component/appbar";
import Create from "./Component/create";

export default class Editor extends Component {
    
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Appbar />
                <main>
                <Create /> 
                </main>
            </React.Fragment>

        )
    }
}
