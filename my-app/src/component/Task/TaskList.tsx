import Task, { ITask } from './Task';

interface ITaskList {
    loading: boolean
    tasks: ITask[]
    onArchiveTask: (id: string | undefined) => void
    onPinTask: (id: string | undefined) => void
}

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }: ITaskList) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}