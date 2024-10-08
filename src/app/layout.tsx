import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "HN top stories",
  description: "Fresh top stories straight from the Hacker News API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-orange-50 md:p-4">
      <body className="bg-white p-4 shadow md:container md:mx-auto">
        <header className="mb-4 text-5xl font-semibold text-orange-600">
          <Link href="/">HN top stories</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
