import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import App from "./component/app"
import "./basic/basic.css"
import 'antd/dist/antd.css'
import axios from "axios" 
import "./component/url"
window.axios = axios ;

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
)