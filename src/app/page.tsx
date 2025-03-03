// 'use client';

import UserButton from "./ui/components/login/user-button";
// import { SignIn } from "./ui/components/login/auth-component";
// import { signIn } from "next-auth/react";

export default  function Home() {
  return (
    <main>
      <h1>Тут буде реєстрація</h1>
      <UserButton />
      {/* <button onClick={() => signIn("google")}>Sign in with Google</button> */}
      {/* <button
        onClick={() => signIn("google", { callbackUrl: "/flow/dashboard" })}
      >
        Sign in with Google
      </button> */}
    </main>
  );
}
