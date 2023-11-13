import { Footer, Navbar } from "@/components/common";
import "@/style/global.css";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Master Limosine</title>
      <body className="h-screen  bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
