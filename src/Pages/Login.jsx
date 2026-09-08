
import { useForm } from "react-hook-form"
import "./login.css"

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // Form Submit
  const onSubmit = (data) =>{
    console.log("User Data:", data)
    alert("Registration Successfully")
  }

  return (
    <main className="login-page">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="login-title">Welcome back</h1>

        <label className="login-label" htmlFor="name">Name</label>
        <input
          className="login-input"
          id="name"
          type="text"
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name", { required: "Name is required" })}
        />
        <p className="login-error">{errors.name?.message}</p>

        <label className="login-label" htmlFor="email">Email</label>
        <input
          className="login-input"
          id="email"
          type="email"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
          required: "email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email Format",
          }
          })}
        />
        <p className="login-error">{errors.email?.message}</p>

        <label className="login-label" htmlFor="password">Password</label>
        <input
          className="login-input"
          id="password"
          type="password"
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password", { required: "Password is required" })}
        />
        <p className="login-error">{errors.password?.message}</p>

        <button className="login-btn" type="submit">Register</button>
      </form>
    </main>
  )
}
export default Login;