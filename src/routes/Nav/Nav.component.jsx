import { Outlet, Link } from "react-router-dom";
import "./Nav.styles.scss";
import { useLogout } from "../../hooks/useLogout";

import Sidebar from "../../components/Sidebar/Sidebar.component";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import AppUsers from "../../components/AppUsers/AppUsers.component";
import Footer from "../../components/footer/footer.component";

export default function Nav() {
  const { logout, isPending } = useLogout();

  const { user } = useContext(AuthContext);

  return (
    <>
      <header>
        <Link to={'/'}>Project Management App</Link>
        <section className="header__links">
          {!user ? (
            <Link to={"/signup"} className="header__links--element">
              Signup
            </Link>
          ) : (
            <></>
          )}
          {!user ? (
            <Link to={"/login"} className="header__links--element">
              Login
            </Link>
          ) : (
            <></>
          )}
          {user && !isPending ? (
            <button className="header__links--element" onClick={logout}>
              Logout
            </button>
          ) : (
            <></>
          )}
          {user && isPending ? <button disabled>Logging out...</button> : <></>}
        </section>
      </header>
      <main>
        {user && (
          <Sidebar photoURL={user.photoURL} displayName={user.displayName} />
        )}
        <Outlet />
        {user && (
          <AppUsers />
        )}
      </main>
      <Footer portfolio={'https://imadfxq.com/'} />
    </>
  );
}
