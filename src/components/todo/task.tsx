import { useAppDispatch } from '../../hooks/use-store';
import { Todo } from '../../context/todo-context';
import './styles.scss';

// import { useTask } from '../../context/todo-context';
import { DELETE_TODO, UPDATE_TODO } from '../../store/constant';

export const Task: React.FC<Todo> = ({ id, title, completed, description }) => {
  // const { setStatus } = useTask();
  const dispatsh = useAppDispatch();
  const checkStatus = (e: any) => {
    // setStatus(id, e.target.checked);

    console.log('e', e.target.checked);
    dispatsh({
      type: UPDATE_TODO,
      payload: { id, completed: e.target.checked },
    });
  };

  const handleDelete = () => {
    dispatsh({ type: DELETE_TODO, id });
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
      <div className={completed ? 'task-done' : ''}>
        <input type="checkbox" checked={completed} onChange={checkStatus} />
        <span>{title}</span>
      </div>

      <button onClick={handleDelete}>delete</button>
    </div>
  );
};
