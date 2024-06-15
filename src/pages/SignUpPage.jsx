import React from 'react';
import styles from './SignUpPage.module.css';
import logo from '../assets/logo.svg';

const SignUpPage = () => {
  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpBox}>
        <div className={styles.signUpLeft}>
          <img src={logo} alt="Pipance Logo" className={styles.signUpLogo} />
        </div>
        <div className={styles.signUpRight}>
          <h2 className={styles.signUpTitle}>Join us today!</h2>
          <p className={styles.Paragraph}>Create an account with us first</p>
          <form className={styles.signUpForm}>
            <p className={styles.InputText}>Fullname</p>
            <input className={styles.signUpInput} type="text" placeholder="Fullname" />
            <p className={styles.InputText}>Email</p>
            <input className={styles.signUpInput} type="email" placeholder="Email Address" />
            <p className={styles.InputText}>Username</p>
            <input className={styles.signUpInput} type="text" placeholder="Username" />
            <p className={styles.InputText}>Password</p>
            <input className={styles.signUpInput} type="password" placeholder="Password" />
            <p className={styles.InputText}>Signup as</p>
            <input className={styles.signUpInput} type="text" placeholder="User" />
            <p className={styles.InputText}>Country</p>
            <input className={styles.signUpInput} type="text" placeholder="Country" />
            <p className={styles.InputText}>State</p>
            <input className={styles.signUpInput} type="text" placeholder="State" />
            <button className={styles.signUpButton} type="submit">Sign up</button>
          </form>
          <p className={styles.signUpText}>
            By creating an account, you agree to the <a href="#" className={styles.signUpLink}>Terms of Service</a> and <a href="#" className={styles.signUpLink}>Privacy Policy</a>
          </p>
          <p className={styles.signUpText}>
            Already have an account? <a href="/sign-in" className={styles.signUpLink}>Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
