"use client";

import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next-nprogress-bar";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()


  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <form className="flex flex-col gap-5 w-full md:max-w-sm" onSubmit={handleSubmit}>
      <div className="inputs border rounded-md border-input flex flex-col gap-1 shadow-sm">
        <Input type="text" placeholder="Username" className="border-0" />
        <Separator />
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border-0"
          />
          <Button
            type="button"
            variant={"link"}
            size={"icon"}
            className="icons absolute right-0 top-[50%] -translate-y-[50%] cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <>
                <EyeOff className="size-4" />
              </>
            ) : (
              <>
                <Eye className="size-4" />
              </>
            )}
          </Button>
        </div>
      </div>

      <Button>Sign in</Button>
    </form>
  );
}

export default LoginForm;
