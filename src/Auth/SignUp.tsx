import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

type SignUpProps = {
  onSignUp: () => void;
};

export default function SignUp({ onSignUp }: SignUpProps) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form className="mt-[45px]" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className=""
          label="Email"
        />
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Choose a preferred username"
          className="mt-4"
          label="Username"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="mt-4"
          label="Password"
        />
        <Button onClick={onSignUp} className="mt-6 w-full">
          Continue
        </Button>
      </form>
    </div>
  );
}
