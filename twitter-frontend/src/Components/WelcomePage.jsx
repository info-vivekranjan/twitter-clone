import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/WelcomePage.module.css';

function WelcomePage() {

    return (
        <div className={styles.welcomePage}>
            <div className={styles.leftWelcome}>
                <div>
                    <i className="ri-twitter-fill"></i>
                </div>
            </div>
            <div className={styles.rightWelcome}>
                <div className={styles.rightTwitterLogo}>
                    <i className="ri-twitter-fill"></i>
                </div>
                <div className={styles.rightBigText}>
                    <h1>Happening now</h1>
                </div>
                <div className={styles.rightMediumText}>
                    <h2>Join Twitter today.</h2>
                </div>
                <div>
                    <div className={styles.googleSignupCont}>
                        <Link className={styles.googleSignup}>Sign up with Google</Link>
                    </div>
                    <div className={styles.appleSignupCont}>
                        <Link className={styles.appleSignup}>Sign up with Apple</Link>
                    </div>
                    <div className={styles.emailSignupCont}>
                        <Link to="/signup" className={styles.emailSignup}>Sign up with phone or email</Link>
                    </div>
                </div>

                <div className={styles.policy}>
                    By signing up, you agree to the<span style={{ color: "#1A90DB" }}> Terms of Service </span>  and <span style={{ color: "#1A90DB" }}> Privacy Policy </span> , including <span style={{ color: "#1A90DB" }}> Cookie Use </span> .
                </div>

                <div className={styles.loginLinkCont}>
                    Already have an account?
                    <Link className={styles.loginLink} to="/login">  Log in  </Link>
                </div>
            </div>
        </div>
    )

}

export { WelcomePage }