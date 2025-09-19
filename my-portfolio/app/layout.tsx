import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nigel Groen - CS Undergrad, Software Engineer",
  description: "Computer Science student at Queen's University building full-stack applications, machine learning models, and interactive experiences. Passionate about solving real-world problems through code.",
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
