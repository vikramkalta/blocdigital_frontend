import styles from '../styles/Home.module.css';

import { useEffect, useState } from "react";
import { fetchTasks } from "../utils/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  // const [token, setToken] = useState();
  let token;
  if (typeof window !== "undefined") {
    // now access your localStorage
    token = localStorage.getItem("token");
  }
  useEffect(() => {
    if (!token) {
      window.location.href = "/auth";
    } else {
      fetchTasks(token)
        .then((res) => setTasks(res.data))
        .catch((err) => console.error(err.response?.data || err.message));
    }
  }, [token]);

  return (
    // <div>
    //   <h1>My Tasks</h1>
    //   <TaskForm setTasks={setTasks} token={token} />
    //   <TaskList tasks={tasks} />
    // </div>

    // <div className="min-h-screen flex items-center justify-center bg-gray-100">
    //   <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
    //     <h1 className="text-2xl font-bold text-center mb-4">TODO App</h1>
    //     <TaskForm setTasks={setTasks} token={token} />
    //     <TaskList tasks={tasks} />
    //   </div>
    // </div>
    <div className={styles.container}>
      <h1>TODO App</h1>
      <TaskForm setTasks={setTasks} token={token}/>
      <TaskList tasks={tasks} />
    </div>
  );
}
