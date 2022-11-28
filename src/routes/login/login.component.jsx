import './login.styles.scss'

import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

export default function Login( ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login, isPending} = useLogin()

  const handleLogin = (e) => {
    e.preventDefault()
    login(email, password)
  }
  return (
    <section className="signup">
      <form className="signup__form" onSubmit={handleLogin}>
        <label>
          <span>Email</span>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            autoComplete="email"
          />
        </label>
        <label>
          <span>Password</span>
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
    </section>
  )
}