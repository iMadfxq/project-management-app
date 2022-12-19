import './login.styles.scss'

import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { Link } from 'react-router-dom';

export default function Login( ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login, isPending} = useLogin()

  const handleLogin = (e) => {
    e.preventDefault()
    login(email, password)
  }
  return (
    <section className="login">
      <h1>Login:</h1>
      <form className="login__form" onSubmit={handleLogin}>
        <label>
          <span>Email:</span>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            autoComplete="email"
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            autoComplete="password"
          />
        </label>
        {!isPending && <button type='submit'>Submit</button>}
        {isPending && <button disabled>Logging in...</button>}
      </form>
      <p>Don't have an account? <Link to={'/signup'}>Create one here</Link></p>
    </section>
  )
}