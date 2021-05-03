import React from 'react';


function QuoteCard ({ props }){
  return(
    
  <div className="quoteCard">
    <img src={props.image} alt={props.character} />
      <ul>
        <li>{props.quote}</li>
        <li>{props.character}</li>
      </ul>
  </div>
  )};
export default QuoteCard;