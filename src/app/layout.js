"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "../../Context/UserContext";
import NavBar from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <UserProvider>
          <NavBar />
          <ToastContainer />
          {children}
        </UserProvider>
        <Footer/>
      </body>
    </html>
  );
}
