import React, {useState} from 'react'

function parent() {
 const [message, setMessage] = useState("Hello from parent");
 
 const handleChange =(e) => {
    setMessage(e.target.value);
 }

    return (
        <div>
            <h1> parent Component </h1>
            <input type="text" value = {message} onChange={handleChange} placeholder='Enter message'/>
            <Child message={message}/>


        </div>
    );
}

function Child({message}) {
    return (
        <div>
            <h2> Child Compnent</h2>
            <p> message from paren: {message}</p>
        </div>
    )
}
  

export default parent