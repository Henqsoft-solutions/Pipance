import React from 'react';
import styles from './SignInPage.module.css';
import logo from '../assets/logo.svg';

const SignInPage = () => {
  return (
    <div className={styles.signInContainer}>
      <div className={styles.signInBox}>
        <div className={styles.signInLeft}>
          <h2 className={styles.signInTitle}>Welcome back!</h2>
          <p>Please enter your details!</p>
          <form className={styles.signInForm}>
            <input className={styles.signInInput} type="email" placeholder="Email" />
            <input className={styles.signInInput} type="password" placeholder="Password" />
            <input className={styles.signInInput} type="text" placeholder="Sign up as User" />
            <button className={styles.signInButton} type="submit">Sign in</button>
          </form>
          <p className={styles.signInText}>
            Forgot Password? <a href="#" className={styles.signInLink}>Forgot Password?</a>
          </p>
          <p className={styles.signInText}>
            Don’t have an account? <a href="/sign-up" className={styles.signInLink}>Sign Up</a>
          </p>
        </div>
        <div className={styles.signInRight}>
          <img src={logo} alt="Pipance Logo" className={styles.signInLogo} />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;