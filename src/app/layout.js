import "@/style/global.css";
import NextTopLoader from "nextjs-toploader";
import { Footer, Navbar } from "@/components/common";
import { AOSInit } from "@/components/common/AOSInit";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
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
