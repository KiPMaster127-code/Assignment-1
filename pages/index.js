import Navbar from "../components/navbar";
import TaskList from "../components/tasklist";

export default function tasks() {                     // Page displaying my navbar and task list
  return (
    <div className="container">
      <Navbar />
      <h1>Task List</h1>
      <TaskList />
    </div>
  );
}
