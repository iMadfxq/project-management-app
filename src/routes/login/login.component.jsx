import './login.styles.scss'

import { useState } from 'react';

export default function Login( ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <section className="signup">
      <form className="signup__form">
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
        <button>Submit</button>
      </form>
    </section>
  )
}