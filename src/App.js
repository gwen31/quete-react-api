import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from "react";
import QuoteCard from './components/QuoteCard';
import './App.css';

function App() {
    const [simpson, setSimpson] = useState({});

      const getSimpson = () => {
        
        axios
          .get('https://simpsons-quotes-api.herokuapp.com/quotes')
          
          .then((response) => response.data)
          .then((data) => {
           console.log(data);
            setSimpson(data[0]);
          })
      };
      useEffect(() => {
        getSimpson()
      }, []);

      return (
      <div className="App">
       <QuoteCard props={simpson}/>
       <button type="button" onClick={getSimpson}>Get Simpson</button>
    
    </div>
  );
}

export default App;