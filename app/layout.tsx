import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Tech Weed",
  description: "Tech Weed - Learn Full Stack, AI, Data Science, Cyber Security",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--background)] text-[var(--text)]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
