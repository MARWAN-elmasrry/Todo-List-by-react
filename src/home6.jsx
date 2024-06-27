import React, { useState } from 'react';
export default function Home(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=(event)=>{
        console.log(`
            Email: ${email}
            Password: ${password}
        `); event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Registion</h1>
            <label>
                Email:
                <input 
                    name='email'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)} required/>
                    </label>
                    <label>
                        Password:
                        <input 
                            type="password" 
                            name="password" 
                            value={password}
                            onChange={e=>setPassword(e.target.value)} required
                        />
                        </label>
                        <button>Submit</button>
        </form>
    )
}