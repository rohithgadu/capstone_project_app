import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [classification, setClassification] = useState('');
  const [background,setBackground] =useState('white');
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`http://127.0.0.1:5000/classify?url=${url}`);
    setClassification(response.data.classification)
    setBackground(Mapping[response.data.classification])
    console.log(response.data.classification);
  }
  const Mapping = {
    "Legitimate": "#80FFAA",
    "Phishing": "#FF21AD",
  }
  return (
      <div className="container" style={{
        backgroundColor: background
      }}>
        <form onSubmit={handleSubmit}>
          <h1>Enter URL</h1>
            <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
          <input type="submit" className="bn47" value="Submit" />
        </form>
        {classification !== null && <h1>Classification result: {classification}</h1>}
      </div>
  );
}

export default App;

