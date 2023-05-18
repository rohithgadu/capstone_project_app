import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [classification, setClassification] = useState('');
  const [background, setBackground] = useState('white');
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
    "A": "#D4CB92",
    "B": "#80A4ED",
    "C": "#80A4ED",
    "D": "#BCD3F2",
    "E": "#E6E1C5",
    "F": "#6096BA",
    "G": "#A3CEF1",
    "H": "#E7ECEF",
    "I": "#fec89a",

  }
  return (
    <div className="container" style={{
      backgroundColor: background
    }}>
      <form onSubmit={handleSubmit}>
        <input type="text" className='text-input' placeholder='Enter URL' value={url} onChange={(event) => setUrl(event.target.value)} />
        <input type="submit" className="button-50" value="Submit" />
      </form>
      {classification !== null && <h1 className='result'>Classification result <br />  <span className='classify'>{classification}</span></h1>}
    </div>
  );
}

export default App;

