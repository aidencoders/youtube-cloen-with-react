import './app.css';
import React, { useEffect, useState } from 'react';

const App = (props) => {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState("twkim");

  useEffect(() => {

  }, [name, videos]);

  return (
    <h1>Hello</h1>
  );
}

export default App;
