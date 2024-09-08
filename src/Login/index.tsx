import Button from "../components/Button";
import Input from "../components/Input";
import Typography from "../components/Typography";
import styles from "./index.module.css";
import { useState } from "react";

type LoginProps = {
  registration?: boolean;
  onLogin: () => void;
};

export default function Login({ registration, onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className={
        styles["border-gradient"] + " bg-[#27292D] py-[40px] px-6 w-[463px]"
      }
    >
      <section className="text-center">
        <Typography variant="sm" fontWeight="medium" color="tertiary">
          WELCOME BACK
        </Typography>
        <Typography
          variant="sm"
          fontWeight="semibold"
          color="white"
          className="mt-2"
        >
          Log into your account
        </Typography>
      </section>
      <form className="mt-[45px]" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email or username"
          className=""
          label="Email or Username"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="mt-4"
          labelComponent={
            <Typography
              variant="sm"
              fontWeight="medium"
              className="flex justify-between items-baseline"
            >
              Password
              <Typography variant="xs" color="primary" fontWeight="medium">
                Forgot password?
              </Typography>
            </Typography>
          }
        />
        <Button onClick={onLogin} className="mt-6">
          Login now
        </Button>
        <Typography variant="sm" color="tertiary" className="mt-3" fontWeight="medium">
          Not registered yet?{" "}
          <Typography as="span" variant="sm" color="primary" fontWeight="medium">
            Register →
          </Typography>
        </Typography>
      </form>
    </div>
  );
}
