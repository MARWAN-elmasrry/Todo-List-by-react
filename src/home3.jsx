import React, { Component } from 'react';

class HomeInner extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const txtStyle={color:this.props.color}
        return <span style={txtStyle}>{this.props.name}</span>
    }
}
class Home extends Component{
    state={
        childColor:"green",
        name:"Marwan"
    }
    changeColor=()=>{
        const newcolor=document.getElementById("colorbox").value;
        this.setState({childColor:newcolor})
    }
    changeName=()=>{
        const newname=document.getElementById("namebox").value;
        this.setState({name:newname})
    }
render(){
    console.log("Inside render")
    return(
        <div>
            Color
            <input type="text" onChange={this.changeColor} id='colorbox'/>
            <br />
            name
            <input type="text" onChange={this.changeName} id='namebox'/>
            <HomeInner color={this.state.childColor} name={this.state.name} />
        </div>
        );
    }
}
export default Home;