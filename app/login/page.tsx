"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function setAuth(value: string) {
  document.cookie = `__session=${value}; path=/`;
}
const resetAuth = () => {
  document.cookie
    .split(";")
    .forEach(
      (cookie) =>
        (document.cookie = cookie
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
    );
};

export default function LoginPage() {
  const router = useRouter();
  const handleLogin = () => {
    setAuth("mocked-session-token");
    router.refresh();
    router.back();
  };
  const isAuthPresent = document.cookie.includes("__session=");
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      {isAuthPresent && <button onClick={resetAuth}>Reset Auth</button>}
      {<Link href="/content">Go to /content</Link>}
    </>
  );
}
