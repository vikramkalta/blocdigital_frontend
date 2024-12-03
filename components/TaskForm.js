// import styles from './TaskForm.module.css';

// import { useForm } from "react-hook-form";
// import { createTask } from "../utils/api";

// export default function TaskForm({ setTasks, token }) {
//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await createTask(data, token);
//       setTasks((prev) => [...prev, response.data]);
//       reset();
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//     }
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
//       <div className={styles.field}>
//         <label htmlFor="category">Category</label>
//         <input type="text" id="category" placeholder="Enter category" />
//       </div>
//       <div className={styles.field}>
//         <label htmlFor="description">Description</label>
//         <textarea id="description" placeholder="Enter description"></textarea>
//       </div>
//       <button type="submit" className={styles.button}>
//         Add Task
//       </button>
//     </form>
//   );
// }
import styles from "./TaskForm.module.css";
import { useForm } from "react-hook-form";
import { createTask } from "../utils/api";

export default function TaskForm({ setTasks, token }) {
  const { register, handleSubmit, reset } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await createTask(data, token);
      setTasks((prev) => [...prev, response.data]); // Add new task to the task list
      reset(); // Reset form fields
    } catch (err) {
      console.error(err.response?.data || err.message); // Log error
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* Category Field */}
      <div className={styles.field}>
        <label htmlFor="category" className={styles.label}>
          Category
        </label>
        <input
          {...register("category", { required: true })} // Bind input to useForm
          type="text"
          id="category"
          placeholder="Enter category"
          className={styles.input}
        />
      </div>

      {/* Description Field */}
      <div className={styles.field}>
        <label htmlFor="description" className={styles.label}>
          Description
        </label>
        <textarea
          {...register("description", { required: true })} // Bind textarea to useForm
          id="description"
          placeholder="Enter description"
          className={styles.input}
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className={styles.button}>
        Add Task
      </button>
    </form>
  );
}
