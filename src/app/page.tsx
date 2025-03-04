// 'use client';

// import Image from "next/image";
// import googleLogo from "@/public/google.png";

import { GoogleSignInButton } from "./ui/components/login/authButtons";
// import { getServerSession } from "next-auth";

// import UserButton from "./ui/components/login/user-button";
// import { SignIn } from "./ui/components/login/auth-component";
// import { signIn } from "next-auth/react";

export default async function Home() {
  return (
    <main>
      <h1>Тут буде реєстрація</h1>
      <GoogleSignInButton />
      {/* <UserButton /> */}
      {/* <button onClick={() => signIn("google")}>Sign in with Google</button> */}
      {/* <button
        onClick={() => signIn("google", { callbackUrl: "/flow/dashboard" })}
      >
        Sign in with Google
      </button> */}
    </main>
  );
}
