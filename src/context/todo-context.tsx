import React, { createContext, useContext, useState } from 'react';
import { v4 } from 'uuid';
export interface Todo {
  id: string;
  title: string;
  completed: boolean;

  description: string;
}

export interface TodoContextValue {
  tasks: Todo[];
  addTask: (task: string) => void;
  setStatus: (id: string, status: boolean) => void;
}
const TaskContext = createContext<TodoContextValue | null>(null);
export const useTask = () => useContext(TaskContext)!;

export const TaskProvider: React.FC<any> = ({ children }) => {
  const preValueTodo = JSON.parse(localStorage.getItem('todos') || '[]');
  const [tasks, setTask] = useState<Todo[]>(preValueTodo);

  const addTask = (task: string) => {
    setTask([
      ...tasks,
      {
        id: v4(),
        title: task,
        completed: false,
        description: ''
      },
    ]);

    localStorage.setItem(
      'todos',
      JSON.stringify([...tasks, { id: v4(), task, complete: false }])
    );
  };

  const setStatusTask = (id: string, status: boolean) => {
    const newTask = tasks.map((el: Todo) =>
      id === el.id ? { ...el, complete: status } : { ...el }
    );
    setTask(newTask);
    localStorage.setItem('todos', JSON.stringify(newTask));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, setStatus: setStatusTask }}>
      {children}
    </TaskContext.Provider>
  );
};
