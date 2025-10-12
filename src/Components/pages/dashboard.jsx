import React  from 'react'
import { useNavigate } from 'react-router-dom';

function dashboard() {

    const navigate = useNavigate();

    const handleabout = () => {
        alert("Navigating to about page");
        navigate('/about');
    }

  return (
    <div style={{textAlign: 'center'}}>
        <h2> dashboard Page</h2>
        <button onClick={handleabout}>Go to About Page</button>
    </div>
  )
}

export default dashboard