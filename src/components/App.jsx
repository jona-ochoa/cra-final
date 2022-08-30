import React, { useState, useEffect } from "react";
import TaskList from "./list/TaskList";
import Settings from "./settings/Settings";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Funcion anonima para crear  un componente principal
 * @returns {React.Components} Componente principal de nuestra aplicación
 */
const App = () => {
  const [dark, setDark] = useState(false);
  /**
   * Función para cambiar el useEffect
   */

  const [showSettings, setShowSettings] = useState(true);

  useEffect(() => {
      setDark(false)
  }, []);

  /**
   * Funcion para intercambiar la variable de estado ligth <-> dark
   */

  const toogleDark = () => setDark(!dark);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div
        className={`h-screen p-4 flex flex-col ${
          dark ? "dark" : ""
        } bg-gray-100 dark:bg-slate-700 transition dark:text-gray-50`}
      >
        <TaskList
          showSettings={showSettings}
          setShowSettings={setShowSettings}
        />
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {showSettings && (
            <motion.div 
            initial={{ y: '100vh'}}
            animate={{ y: '0'}}
            exit={{ y: '100vh'}}

            >
              <Settings toggleDark={toogleDark} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
