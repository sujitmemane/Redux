import { Fragment } from "react";
import { authActions } from "../store/auth";
import classes from "./Auth.module.css";
import UserProfile from "./UserProfile";
import { useDispatch, useSelector } from "react-redux";
const Auth = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const login = () => {
    dispatch(authActions.login());
  };
  return (
    <Fragment>
      {auth ? (
        <UserProfile />
      ) : (
        <main className={classes.auth}>
          <section>
            <form>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button onClick={login}>Login</button>
            </form>
          </section>
        </main>
      )}
    </Fragment>
  );
};

export default Auth;
