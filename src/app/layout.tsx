import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "./globals.css";

export const metadata = {
  title: "시니어내일",
  description: "시니어를 위한 채용 플랫폼",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
