"use client";

// import { signIn, signOut } from "../../../../../auth.config" 
import { signIn, signOut } from "next-auth/react";

import { Button } from "@/app/ui/components/button"

// export function SignIn({
//   provider,
//   ...props
// }: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
//   return (
//     <form
//       action={async () => {
//         "use server"
//         await signIn(provider)
//       }}
//     >
//       <Button {...props}>Sign In</Button>
//     </form>
//   )
// }

// export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
//   return (
//     <form
//       action={async () => {
//         "use server"
//         await signOut()
//       }}
//       className="w-full"
//     >
//       <Button variant="ghost" className="w-full p-0" {...props}>
//         Sign Out
//       </Button>
//     </form>
//   )
// }

export function SignIn({ provider }: { provider?: string }) {
  return (
    <Button onClick={() => signIn(provider)} variant="default">
      Sign In
    </Button>
  );
}

export function SignOut() {
  return (
    <Button onClick={() => signOut()} variant="ghost">
      Sign Out
    </Button>
  );
}