import "./globals.css";

export const metadata = {
  title: "Rhys Jonathan Abalon | Web Developer",
  description:
    "Portfolio of Rhys Jonathan Abalon, a computer science graduate specializing in data science, web development, software engineering, and automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
