import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Phoo Wai Ko - Full-Stack Developer",
  description:
    "Full-stack developer skilled in React, Next.js, and Laravel. Building modern web applications with clean UI, performance, and scalability in mind.",
  keywords: [
    "React developer",
    "Next.js developer",
    "Laravel developer",
    "Full-stack developer",
    "Web developer portfolio",
    "JavaScript",
    "PHP",
    "Frontend",
    "Backend",
    "Modern web apps",
  ],
  authors: [{ name: "Phoo Wai Ko" }],
  openGraph: {
    title: "Phoo Wai Ko - Full-Stack Developer",
    description:
      "Explore my portfolio showcasing modern web applications built using React, Next.js, and Laravel.",
    url: "https://phoowaiko.vercel.app/",
    siteName: "Phoo Wai Ko",

    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoo Wai Ko - Full-Stack Developer",
    description:
      "Showcasing web apps built with React, Next.js, and Laravel. Clean code, great UI, and scalable solutions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
