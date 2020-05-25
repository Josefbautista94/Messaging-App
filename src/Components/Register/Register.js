import React,{ Component } from "react";
import "./Register.css";
import {Redirect} from "react-router-dom"

const api_endpoint = 'http://localhost:5000/api';

class FrontPage extends React.Component{

constructor(props){
    super(props);
    this.state = {
        name:"",
        email: ""
    };
     
}

}