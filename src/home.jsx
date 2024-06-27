// import React, { Component } from 'react';

// class Home extends Component {
//     state = { 
//         counter:"0"
//     }
//      incCounter=()=>{
//         this.setState({counter:parseInt(this.state.counter)+1})
//      } 
//     render() { 
//         return <div className="body">
//             <button onClick={this.incCounter}>click me</button>
//             <br />
//             {this.state.counter}
//             <br />
//         </div>;
//     }
// }
 
// export default Home;
import React, { useState } from 'react';

function Home(){
    const [count , setCount] = useState(0);
    return(
        <div>
            <h1>YOU CLICKED {count} TIMES</h1>
            <button onClick={()=>setCount(count+1)}>CLICK ME</button>
        </div>
    );
}
 
export default Home;