import axios from "axios";
import { useEffect, useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-8/12 p-8 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Lista de tareas
        </h1>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.ID}
              className="p-6 rounded-md shadow-md bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <div className="space-y-2">
                <div className="font-semibold text-lg">
                  Título: {task.title}
                </div>
                <div className="">Número de tarea: {task.ID}</div>
                <div className="">ID del usuario: {task.user_id}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Tasks;
