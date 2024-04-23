"use client";

import Button from "@/app/components/Button";
import "./styles.css";
import { useState } from "react";
import { login } from "@/app/shared/api";
import { defaultRedirect } from "@/app/shared/function/defaultRedirect";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );

  return (
    <div id="loginPage">
      <form id="loginForm">
        <div className="inputItem">
          <label>email</label>
          <input
            type="email"
            className="input"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="inputItem">
          <label>password</label>
          <input
            type="password"
            className="input"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <Button
          id="loginFormButton"
          onClick={async (e) => {
            e.preventDefault();
            await login(formData)
              .then(() => {
                defaultRedirect(router);
              })
              .catch((error) => console.error("error", error));
          }}
        >
          login
        </Button>
      </form>
    </div>
  );
};

export default Login;
