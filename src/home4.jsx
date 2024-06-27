import React, { Component } from 'react';

class Homeinner extends Component{
    sendData=()=>{
        setInterval(()=>
        {
            const currTime=Date();
            this.props.parentCallBack(currTime);
        },1000);
    }
    componentDidMount(){
        this.sendData();
    }
    render(){
        return <div></div>
    }
}
class Home extends Component{
    state={ message:""}
    fun1=(childData)=>{
        this.setState({message:childData})
    }
    render(){
        return(
            <div>
                <Homeinner parentCallBack={this.fun1} />
                <p>{this.state.message}</p>
            </div>
        )
    }
}
export default Home;