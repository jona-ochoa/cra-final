import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * Componente que gestiona la lista de tareas
 *
 * @returns {React.Component}
 */

const TaskList = ({ showSettings, setShowSettings }) => {
  const [newTask, setNewTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  /**
   * Añade una nueva tarea a la lista de tareas
   */

  const addNewTask = () => {
    if (newTask === "") return;
    setTasklist([...tasklist, { task: newTask, completed: false }]);
    setNewTask("");
    return true;
  };

  /**
   * Función para chequear si la lista de tareas está vacía
   * @returns true si tasklist.length === 0
   */

  const isTasksEmpty = () => tasklist.length === 0;

  /**
   * Editar el nombre de la nueva tarea
   * @param {*} e - Evento de onChanche proveniente de React
   */

  const editNewItem = (e) => setNewTask(e.target.value);

  /**
   * Funcion para eliminar una tarea en concreto
   * @param {*} index - Indice de la tarea a eliminar
   */

  // const removeItem = (index) => {
  //   const newtasklist = tasklist.filter((t, i) => i !== index);
  //   setTasklist(newtasklist);
  // };

  const toggleCompleteItem = (index) => {
    let newTaskList = tasklist;
    newTaskList[index].completed = !newTaskList[index].completed;
    setTasklist([...newTaskList]);
  };

  const insertNewItemOnEnterKey = (e) => e.key === "Enter" && addNewTask();

  return (
    <>
      <header className="flex justify-between">
        <h1 className="text-3xl text-sky-700 font-extrabold dark:text-sky-300">
          Task List
        </h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn"
          onClick={() => setShowSettings(!showSettings)}
        >
          {!showSettings ? "Show Settings" : "Hide Settings"}
        </motion.button>
      </header>
      <div className="my-4">
        <input
          className="shadow py-1 px-2 rounded-lg outline-none hover:bg-sky-200 transition-all duration-300 mr-2 dark:bg-slate-800 font-semibold"
          value={newTask}
          onKeyDown={insertNewItemOnEnterKey}
          onChange={editNewItem}
          placeholder="New Task"
          type="text"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn"
          onClick={addNewTask}
        >
          Create Task
        </motion.button>
      </div>
      {isTasksEmpty() ? (
        <p className="text-slate-400">Task List is Empty</p>
      ) : (
        <ul>
          {tasklist.map((item, index) => (
            <motion.li
              initial={{ x: "100vw" }}
              animate={{ x: "0" }}
              key={index}
            >
            <label>
              <input
                type="checkbox"
                //   onClick={() => removeItem(index)}
                onClick={() => toggleCompleteItem(index)}
                checked={item.completed}
                onChange={() => editNewItem}
              />
              <span
                className={`ml-2 text-sm italic dark:text-gray-100 ${
                  item.completed && "line-through"
                }`}
              >
                {item.task}
              </span>
            </label>
            </motion.li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TaskList;
