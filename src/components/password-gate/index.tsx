import React, { useState, useCallback } from "react";
import style from "./style.module.scss";

const STORAGE_KEY = "roborave-auth";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [unlocked, setUnlocked] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1"
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (input === "MURPHY") {
        sessionStorage.setItem(STORAGE_KEY, "1");
        setUnlocked(true);
        setError(false);
      } else {
        setError(true);
        setInput("");
      }
    },
    [input]
  );

  if (unlocked) return <>{children}</>;

  return (
    <div className={style.overlay}>
      <div className={style.card}>
        <div className={style.lockIcon}>
          <i className="fas fa-lock" />
        </div>
        <h2 className={style.title}>Access Restricted</h2>
        <p className={style.subtitle}>
          This section is restricted to Robotics@APEX members. Enter the password to continue.
        </p>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            type="password"
            className={style.input}
            placeholder="Password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            autoFocus
          />
          <button type="submit" className={style.button}>
            Unlock
          </button>
        </form>
        {error && <p className={style.error}>Incorrect password. Try again.</p>}
      </div>
    </div>
  );
}
