import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/ui/styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: "Flow-CRM",
  description: "Customer Relationship Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
