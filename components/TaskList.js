import styles from './TaskList.module.css';

export default function TaskList({ tasks }) {
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`${styles.task} ${
            task.status === "Complete" ? styles.complete : ""
          }`}
        >
          <h3>{task.category}</h3>
          <p>{task.description}</p>
          <span>{task.status}</span>
        </div>
      ))}
    </div>
  );
}
