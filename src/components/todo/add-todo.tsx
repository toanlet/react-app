import { useState } from 'react';
import { useAppDispatch } from '../../hooks/index';
// import { useTask } from '../../context/todo-context';

import { ADD_TODO } from '../../store/constant';
import { v4 } from 'uuid';

export const AddTask: React.FC = () => {
  // const { addTask } = useTask();
  const dispatsh = useAppDispatch();

  const [todo, setTodo] = useState<string>('');

  const handleAdd = () => {
    // addTask(todo);
    dispatsh({
      type: ADD_TODO,
      payload: { id: v4(), title: todo, completed: false, description: '' },
    });
    setTodo('');
  };
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
