import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { register, login } from "../utils/api";
import styles from "../styles/Auth.module.css";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const { register: formRegister, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = isRegister ? await register(data) : await login(data);
      localStorage.setItem("token", response.data.token);
      router.push("/");
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    // <div>
    //   <h1>{isRegister ? "Register" : "Login"}</h1>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <input {...formRegister("username")} placeholder="Username" required />
    //     <input
    //       {...formRegister("password")}
    //       type="password"
    //       placeholder="Password"
    //       required
    //     />
    //     <button type="submit">{isRegister ? "Register" : "Login"}</button>
    //   </form>
    //   <button onClick={() => setIsRegister(!isRegister)}>
    //     {isRegister ? "Switch to Login" : "Switch to Register"}
    //   </button>
    // </div>
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>{isRegister ? "Register" : "Login"}</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {/* Username Input */}
          <div className={styles.field}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              id="username"
              {...formRegister("username")}
              placeholder="Enter your username"
              className={styles.input}
              required
            />
          </div>
          {/* Password Input */}
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              {...formRegister("password")}
              type="password"
              placeholder="Enter your password"
              className={styles.input}
              required
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        {/* Switch between Login and Register */}
        <button
          className={styles.switchButton}
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Switch to Login" : "Switch to Register"}
        </button>
      </div>
    </div>
  );
}
