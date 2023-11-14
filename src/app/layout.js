import { Footer, Navbar } from "@/components/common";
import "@/style/global.css";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Master Limosine</title>
      <body className="h-screen  bg-black">
        <NextTopLoader showSpinner={false} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
