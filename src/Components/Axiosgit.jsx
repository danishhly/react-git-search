import React, { useState }from "react";
import axios from 'axios';

function Axiosgit() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const[loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username) return;

    try {
      setError(""); // reset previous errors
      setUser(null); // reset previous user data
      setLoading(true); // set Loading to true
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data); // save user data
    } catch (err) {
      setUser(null);
      if (err.response && err.response.status === 404) {
        setError("User not found");
      } else {
        setError("Something went wrong");
      }
    }
      finally {
        setLoading(false); // set Loading to false
      }
    };
  
    
  return (
    <div style = {{ maxWidth: "400px", margin: "auto", textAlign:"center"}}>
        <h2>GitHub User Search</h2>

        <input 
        type = "text"
        placeholder='Enter GitHub username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick = {handleSearch}>Search</button>

        {loading && <p>Loading...</p>}

        {error && <p style ={{ color: "red"}}>{error}</p>}

        {user && !loading && (
            <div style={{ marginTop: "20px", textAlign: "left" }}>
                <img src={user.avatar_url} alt={user.login} style={{ width: "100px", borderRadius: "50%" }} />
                <h3>{user.name ? user.name : user.login}</h3>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
                <p>Public Repos: {user.public_repos}</p>
                <a href = {user.html_url} target="_blank" rel="noreferrer">View Profile</a>
            </div>
        )}
    </div>
  )
}

export default Axiosgit