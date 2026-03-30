import { useState } from "react";

export default function tasklist() {          // Creating task list component
  const [text, Text] = useState("");
  const [tasks, Task] = useState([]);

  function addtask() {                        // Function to add the current text to task list

    if (text.trim() === "") return;           // if statement to prevent adding empty tasks
    Task([...tasks, text]);                   // adds tasks to the array 
    Text("");                     
    
  }

  return (
                                                                                                                      // Creates input field for typing your task and the button to add the task
    <div className="box">
      <input className="input" value={text} onChange={(e) => Text(e.target.value)} placeholder="Enter your task" />                                                                                                              
      <button className="button" onClick={addtask}>Add the task</button>                                            
      <ul className="task-list"> {tasks.map((t, i) => (                                                             // Lists the tasks
      <li key={i} className="task-item">{t}</li>
        )
        )
        }
      </ul>
    </div>
  );
}
