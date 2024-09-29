"use client";

import { Input } from "../ui/input";

function LoginForm() {
  return (
    <form>
      <div className="inputs">
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />
      </div>
    </form>
  );
}

export default LoginForm;
