import { Fragment } from "react";

import classes from "./Auth.module.css";

const Auth = () => {
  return (
    <Fragment>
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
            <button>Login</button>
          </form>
        </section>
      </main>
    </Fragment>
  );
};

export default Auth;
