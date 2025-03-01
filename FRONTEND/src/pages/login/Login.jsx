import React from "react";

function Login() {
  return (
    <form>
      <div className="email">
        <label htmlFor="email">Email : </label>
        <input type="text" name="email" />
      </div>
      <div className="password">
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" />
      </div>
      <div className="submit">
            <button>Login</button>
        </div>
    </form>
  );
}

export default Login;
