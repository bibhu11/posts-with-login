import { useState } from "react";
import Input from "../components/Input";
import Typography from "../components/Typography";
import Button from "../components/Button";

type LoginProps = {
  onLogin: () => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
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
        <Button onClick={onLogin} className="mt-6 w-full">
          Login now
        </Button>
      </form>
    </div>
  );
}
