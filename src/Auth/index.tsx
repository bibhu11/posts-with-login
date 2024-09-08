import { useState } from "react";
import Typography from "../components/Typography";
import styles from "./index.module.css";
import Login from "./Login";
import SignUp from "./SignUp";

type LoginProps = {
  registration?: boolean;
  onLogin: () => void;
};

export default function Auth({ registration, onLogin }: LoginProps) {
  const [signUp, setSignUp] = useState(registration);
  return (
    <div className={styles["border-gradient"] + " py-10 px-6"}>
      <section className="text-center">
        <Typography variant="sm" fontWeight="medium" color="tertiary">
          {signUp ? "SIGN UP" : "WELCOME BACK"}
        </Typography>
        <Typography
          variant="lg"
          fontWeight="semibold"
          color="white"
          className="mt-2"
        >
          {signUp ? "Create an account to continue" : "Log into your account"}
        </Typography>
      </section>
      {signUp ? <SignUp onSignUp={onLogin} /> : <Login onLogin={onLogin} />}
      <Typography
        variant="sm"
        color="tertiary"
        className="mt-3"
        fontWeight="medium"
        as="button"
        onClick={() => setSignUp(!signUp)}
      >
        {`${signUp ? "Already have an account?" : "Not registered yet?"} `}
        <Typography as="span" variant="sm" color="primary" fontWeight="medium">
          {`${signUp ? "Login" : "Register"} →`}
        </Typography>
      </Typography>
    </div>
  );
}
