import React, { Component } from 'react';

class Home2 extends Component {
    state = { 
            id:1,
            name:"marwan",
            age:28
        }
    render() { 
        return <div className="body">
            <p>{this.state.name}</p>
            <p>{this.state.age}</p>
            <p>{this.state.id}</p>
        </div>;
    }
}
 
export default Home2;