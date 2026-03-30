import { useState } from "react";

export default function randomquote() {                                                                                                                   // Random Quote component
  const quotes = [                                                                                                                                        // My list of quotes
    "With Great Power, Comes Great Responsobility - Ben Parker",
    "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present - Master Oogway",
    "I am vengeance, I am the night, I am Batman !!! - Bruce Wayne",
    "I can do this all day - Captain America",
    "How will I know if I'm ready? You won't. It's a leap of faith, Miles. In the end, that's all it is. A leap of faith - Peter B. Parker"
  ];

  const order = [3, 0, 4, 1, 2];                                                                                                                          // My custom order for cycling through these quotes
  const [i, update] = useState(0);
  const [q, setquote] = useState("");

  function newquote() {                                                                                                                                   // Function that move to the next quote within the custom order
    const next = (i + 1) % order.length;
    update(next);                                                                                                                 
    setquote(quotes[order[next]]);
  }

  return (
    <div className="box">
      <button className="button" onClick={newquote}>Press for a Quote</button>
      {q && <p className="message">{q}</p>}
    </div>
  );
}