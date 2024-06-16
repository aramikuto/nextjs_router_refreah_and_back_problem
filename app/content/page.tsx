import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

const getAuthStatus = () =>
  cookies().get("__session")?.value === "mocked-session-token";

async function getContent() {
  // Simulate a delay to fetch the content
  const isAuthorized = getAuthStatus();
  await new Promise((resolve) => setTimeout(resolve, 300));
  return isAuthorized
    ? "You are authorized!"
    : "You need to login to view this content";
}

export default async function ContentPage() {
  const isAuthorized = getAuthStatus();
  const content = await getContent();
  const resetAuth = async () => {
    "use server";
    cookies().delete("__session");
  };
  return (
    <>
      <div>{content}</div>
      {isAuthorized ? (
        <form action={resetAuth}>
          <button type="submit">Reset Auth</button>
        </form>
      ) : (
        <Link href="/login">Go to login page</Link>
      )}
    </>
  );
}
