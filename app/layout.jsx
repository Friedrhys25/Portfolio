import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: "Rhys Jonathan Abalon | Web Developer",
  description:
    "Portfolio of Rhys Jonathan Abalon, a computer science graduate specializing in data science, web development, software engineering, and automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-primary font-sans antialiased min-h-screen selection:bg-accent/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
