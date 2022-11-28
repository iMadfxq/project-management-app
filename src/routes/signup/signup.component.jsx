import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";
import "./signup.styles.scss";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(undefined);
  const [thumbnailError, setThumbnailError] = useState(null);


  const {signup, isPending, error} = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName, thumbnail)
  }


  const handleFileChange = (e) => {
    setThumbnail(undefined);

    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select an image");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("The selected file has to be an image");
      setThumbnail(undefined);

      return;
    }
    if (selected.size > 500000) {
      setThumbnailError("The image size need to be less than 500KB");
      setThumbnail(undefined);

      return;
    }

    setThumbnail(selected);
    setThumbnailError(null);
  };

  return (
    <section className="signup">
      <form className="signup__form" onSubmit={handleSubmit}>
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
            autoComplete="new-password"
          />
        </label>
        <label>
          <span>Username</span>
          <input
            required
            onChange={(e) => setDisplayName(e.target.value)}
            type="text"
            value={displayName}
          />
        </label>
        <label>
          <span>Profile Picture</span>
          <input required onChange={handleFileChange} type="file" />
          {thumbnailError && <p>{thumbnailError}</p>}
        </label>
        {isPending && <button disabled>Loading...</button>}
        {!isPending && <button>Submit</button>}
        {error && <p>{error}</p>}
      </form>
      <p>Already have an account? <Link to={'/login'}>Log in here</Link></p>
    </section>
  );
}
